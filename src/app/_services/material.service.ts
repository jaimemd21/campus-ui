import { Material } from './../_models/material';
import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MaterialService{

 private url: string = 'http://localhost:8080/material/edition/';

    constructor(private http: HttpClient) {

    }

    getMaterial(idEdition: number) {
        return this.http.get<Material[]>(this.url + idEdition);
    }

}