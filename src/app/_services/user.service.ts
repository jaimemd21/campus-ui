import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    private url: string = 'http://localhost:8080/login';

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {

        const body = JSON.stringify({
            username: username,
            password: password
        });

        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

        return this.http
            .post<User>(`${this.url}`, body, { headers: headers });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}