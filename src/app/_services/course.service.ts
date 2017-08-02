import { EditionStudent } from './../_models/editionStudent';
import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CourseService {

    private url: string = 'http://localhost:8080/edition/student/';

    constructor(private http: HttpClient) {

    }

    getCourses(idStudent: number) {
        return this.http.get<EditionStudent[]>(this.url + idStudent);
    }

}