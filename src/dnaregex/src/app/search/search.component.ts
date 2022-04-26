import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server/server.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    searchInput: string = "";
    searchResults: any[] = [];

    constructor(private server: ServerService) { }

    ngOnInit(): void {
    }

    onSearch() {
        this.server.getResults(this.searchInput).then((response: any) => {
            this.searchResults = response;
        });
    }

    sqlDateToString(dateString: string) {
        const date = new Date(dateString);
        return date.getDate().toString() + " " + date.toLocaleString('default', { month: 'long' }).toString() + " " + date.getFullYear().toString();;
    }

}
