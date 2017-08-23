import { Router } from '@angular/router';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {  

  constructor(
    private userService: UserService, 
    private router: Router    
  ) { }

  ngOnInit() {
  }

  logout(){    
    this.userService.logout();
    this.router.navigate(['/login']);    
  }
}
