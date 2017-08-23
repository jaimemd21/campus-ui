import { Material } from './../_models/material';
import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface country {
    id: string;
    name: string;
}

@Injectable()
export class CountryService {

    countries: country[] = [];

    private url: string = 'app/_json/countries.json';

    constructor(private http: HttpClient) {

    }

    getCountries() {
        return this.http.get<country[]>(this.url);
    }

}