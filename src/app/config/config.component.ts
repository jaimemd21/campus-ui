import { CountryService } from './../_services/country.service';
import { Person } from './../_models/person';
import { PersonService } from './../_services/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  person: Person;
  fullName: string;
  model = new Person();

  constructor(private personService: PersonService, private countryService: CountryService) { }

  ngOnInit() {
    this.fullName = sessionStorage.getItem("fullName");

    let id = sessionStorage.getItem("currentID");
    this.personService.getPersonInfo(id).subscribe(data => {
      this.person = data;
    });    

    let obs = this.countryService.getCountries();
    obs.subscribe(data => {
      console.log(data);
    });
  }
}
