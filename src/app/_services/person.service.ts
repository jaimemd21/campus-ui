import { Person } from './../_models/person';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonService {

    private url: string = 'http://localhost:8080/person/';

    constructor(private http: HttpClient) { }

    getPersonInfo(idUser: string) {        
        return this.http
            .get<Person>(`${this.url}` + idUser);
    }
}