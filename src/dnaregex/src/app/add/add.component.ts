import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server/server.service';
import { inputsanitation } from '../../algorithm/sanitation.js';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
    disease: string = "";
    dna: string = "";
    fileName: string = "Disease_DNA.txt";
    confirm: string = " ";

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
        if (this.disease == "" || this.dna == "") {
            this.confirm = "Please fill in all fields";
        } else if (!inputsanitation(this.dna)) {
            this.confirm = "DNA sequence contains invalid characters";
        } else {
            this.server.addDisease(this.disease, this.dna);
            this.confirm = "Disease added to the database";
        }
    }

}
