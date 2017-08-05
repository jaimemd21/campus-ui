import { Router } from '@angular/router';
import { EditionStudent } from './../_models/editionStudent';
import { CourseService } from './../_services/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  texto: string;
  idStudent: number;
  courses: EditionStudent[] = [];
  filters: EditionStudent[] = [];
  pagination: number[] = [];
  PER_PAGE: number = 10;

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {
    this.idStudent = JSON.parse(sessionStorage.getItem('currentID'));
    this.getCourses();
  }

  getCourses() {
    let obs = this.courseService.getCourses(this.idStudent);
    obs.subscribe(data => {
      this.courses = data;
      this.filters = data;
      let pages = Math.ceil(this.courses.length / this.PER_PAGE);
      for (let i = 0; i < pages; i++) {
        this.pagination.push(i + 1);
      }
    });
  }

  viewMaterial(idEdition: number, courseName: string) {    
    this.router.navigate(['/materials', idEdition]);
    sessionStorage.setItem('activeCourse', courseName);
  }

  buscar() {
    this.filters = this.courses.filter(x => x.name.toLowerCase().includes(this.texto.toLowerCase()));
  }

}
