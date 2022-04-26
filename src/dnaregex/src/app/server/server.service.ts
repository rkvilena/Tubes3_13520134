import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ServerService {

    constructor(private http: HttpClient) { }

    private async request(method: string, url: string, data?: any) {
        const result = this.http.request(method, url, {
            body: data,
            responseType: 'json',
            observe: 'body'
        });

        return new Promise((resolve, reject) => {
            result.subscribe(resolve, reject);
        });
    }

    addDisease(name: string, dna: string) {
        return this.request('POST', 'http://localhost:8080/add-disease', { name, dna });
    }

    getDisease(name: string) {
        return this.request('GET', `http://localhost:8080/get-disease/${name}`);
    }

    addResult(date: string, name: string, disease: string, percentage: number, result: boolean) {
        return this.request('POST', 'http://localhost:8080/add-result', {
            date: date,
            user: name,
            disease: disease,
            percentage: percentage.toFixed(0),
            result: result.toString()
        });
    }

    getResults(search: string) {
        return this.request('GET', `http://localhost:8080/get-results/${search}`);
    }
}
