import { Component, OnInit } from '@angular/core';

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
    result: string = "";

    constructor() { }

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
        console.log(this.name);
        console.log(this.disease);
        console.log(this.algo);
        console.log(this.dna);
    }
}
