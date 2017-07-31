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
    private userService: UserService) { }

  ngOnInit() {
    // reset login status
    this.userService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onLogin() {

    let obs = this.userService.login(this.username, this.password);
    obs.subscribe(data => {
      if (data.username == "mitocode21@gmail.com") {
        localStorage.setItem('currentID', JSON.stringify(data.id_user));
        localStorage.setItem('currentUser', JSON.stringify(data.username));
        this.router.navigate([this.returnUrl]);        
      }
    });
  }
}
