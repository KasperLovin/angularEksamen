import { AppUser } from './../models/app-user';
import { AuthService } from '../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Appjoke } from '../models/app-joke';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser;
  jokes: Appjoke;
  
  constructor(
    private AuthService: AuthService, 
    private router: Router) 
  {
    this.AuthService.appUser$.subscribe(appUser => this.appUser = appUser);
  }


  logout()
  {
    this.AuthService.logout();
  }

}
