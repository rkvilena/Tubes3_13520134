import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server/server.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
    disease: string = "";
    dna: string = "";
    fileName: string = "Disease_DNA.txt";
    confirmIsVisible: boolean = false;

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
        this.server.addDisease(this.disease, this.dna);
        this.confirmIsVisible = true;
    }

}
