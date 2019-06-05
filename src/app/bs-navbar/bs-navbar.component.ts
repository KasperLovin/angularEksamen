import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser;
  constructor(private AuthService: AuthService, private router: Router) {
    this.AuthService.appUser$.subscribe(appUser => this.appUser = appUser);
  }


  logout()
  {
    this.AuthService.logout();
    this.router.navigate(['/']);
  }

}
