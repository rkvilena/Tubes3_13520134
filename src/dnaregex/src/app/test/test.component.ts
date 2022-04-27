import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server/server.service';
import { inputsanitation } from 'src/algorithm/sanitation';
import * as BooyerMoore from '../../algorithm/boyermoore.js';
import * as KMP from '../../algorithm/kmp.js';
import * as Hamming from '../../algorithm/hammingdist.js';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {
    name: string = "";
    fileName: string = "DNA_Sequence.txt";
    disease: string = "";
    algo: string = "";
    dna: string = "";
    diseaseDna: string = "";
    date: Date = new Date();
    result: boolean = false;
    percentage: number = 100;
    testResult: string = "\u200a";
    resultIsVisible: boolean = false;

    constructor(private server: ServerService) { }

    ngOnInit(): void {
    }

    onFileSelected(event: any) {
        const file: File = event.target.files[0];

        if (file) {
            this.fileName = file.name;

            var reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    this.dna = reader.result.toString();
                }
            }
            reader.readAsText(file);
        }
    }

    onSubmit() {
        if (this.name == "" || this.disease == "" || this.dna == "") {
            this.testResult = "Please fill in all fields";
            this.resultIsVisible = true;
        } else if (!inputsanitation(this.dna)) {
            this.testResult = "DNA sequence contains invalid characters";
            this.resultIsVisible = true;
        } else {
            this.server.getDisease(this.disease).then((response: any) => {
                if (response[0] != undefined) {
                    this.diseaseDna = response[0].dna_sequence;
                }
                if (this.diseaseDna == "") {
                    this.testResult = "Disease not found";
                    this.resultIsVisible = true;
                } else {
                    if (this.algo == "bm") {
                        this.result = BooyerMoore.boyermoore(this.dna, this.diseaseDna);
                    } else if (this.algo == "kmp") {
                        this.result = KMP.kmp(this.dna, this.diseaseDna);
                    }

                    if (!this.result) {
                        let hamming = Hamming.hammingprocess(this.dna, this.diseaseDna);
                        this.result = hamming[0] as boolean;
                        this.percentage = (hamming[1] as number) * 100;
                    }

                    let dateString: string = this.date.getDate().toString() + " " + this.date.toLocaleString('default', { month: 'long' }).toString() + " " + this.date.getFullYear().toString();
                    let dateSQL: string = this.date.toISOString().slice(0, 10);

                    this.testResult = dateString + " - " + this.name + " - " + this.disease + " - " + this.percentage.toFixed(0) + "% - " + (this.result ? "True" : "False");
                    this.resultIsVisible = true;

                    this.server.addResult(dateSQL, this.name, this.disease, this.percentage, this.result);
                    this.percentage = 100;
                }
            });
        }
    }
}
