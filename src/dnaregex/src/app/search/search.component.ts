import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    searchInput: string = "";
    searchResults: any[] = [1];

    constructor() { }

    ngOnInit(): void {
    }

}
