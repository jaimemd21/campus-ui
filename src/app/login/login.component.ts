import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;
  username: string = "";
  password: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    // reset login status
    this.userService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onLogin() {

    let obs = this.userService.login(this.username, this.password);
    obs.subscribe(data => {      
      if (data.id_user > 0) {
        let formatName = data.person_name.split(' ')[0].toLowerCase();
        formatName = formatName.charAt(0).toUpperCase() + formatName.slice(1);
        sessionStorage.setItem('currentID', JSON.stringify(data.id_user));
        sessionStorage.setItem('currentUser', JSON.stringify(formatName));
        sessionStorage.setItem('fullName', data.person_name);
        this.router.navigate([this.returnUrl]);
      }
    });
  }
}
