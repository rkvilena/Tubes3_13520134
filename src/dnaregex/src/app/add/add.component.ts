import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
    disease: string = "";

    constructor() { }

    ngOnInit(): void {
    }

}
