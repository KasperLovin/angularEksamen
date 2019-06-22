//import { Actions } from './../actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  email: string;
  password: string;

  constructor( private router: Router,private fb: FormBuilder, private AuthService: AuthService, private snackbar: MatSnackBar) 
  {

  }

  onSubmit(): void
  {
    this.snackbar.open('Trying to Login', '',{
      duration:1000
    });
      console.log("1");
      if(this.snackbar)
      {
        this.AuthService.login(this.email, this.password).subscribe(result => {
          console.log(result + "YO HEJ!")

      });
      console.log("2")
      }

  }

  loginWithGoogle()
  {
    this.AuthService.loginWithGoogle();
  }

  signup() {
    this.AuthService.signUp(this.email, this.password);
    this.email = this.password = '';
  }

}
