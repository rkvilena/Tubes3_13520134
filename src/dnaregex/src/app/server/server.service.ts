import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ServerService {

    constructor(private http: HttpClient) { }

    private async request(method: string, url: string, data?: any) {
        const req = this.http.request(method, url, {
            body: data,
            responseType: 'json',
            observe: 'body'
        });

        let result: JSON;

        req.subscribe(
            data => result = (data as any).body,
        );
    }

    addDisease(name: string, dna: string) {
        this.request('POST', 'http://localhost:8080/add-disease', { name: name, dna: dna })
    }
}
