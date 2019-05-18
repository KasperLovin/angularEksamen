import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private AuthService: AuthService) 
  {

  }

  login()
  {
    this.AuthService.login();
  }

}
