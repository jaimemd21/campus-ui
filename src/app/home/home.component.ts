import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: string;

  constructor() {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
   }
  ngOnInit() {
  }

}
