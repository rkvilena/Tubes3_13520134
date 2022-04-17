import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {
    name: string = "";
    dnaPath: string = "";
    disease: string = "";
    algo: string = "";

    constructor() { }

    ngOnInit(): void {
    }

    debug() {
        console.log(this.name);
        console.log(this.dnaPath);
        console.log(this.disease);
        console.log(this.algo);
    }

}
