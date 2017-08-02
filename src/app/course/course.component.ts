import { EditionStudent } from './../_models/editionStudent';
import { CourseService } from './../_services/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  idStudent: number;
  courses: EditionStudent[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.idStudent = JSON.parse(localStorage.getItem('currentID'));
    this.getCourses();
  }

  getCourses() {
    let obs = this.courseService.getCourses(this.idStudent);
    obs.subscribe(data => {            
      this.courses = data;      
    });
  }

  viewMaterial(idEdition: number){
    console.log(idEdition);
  }

}
