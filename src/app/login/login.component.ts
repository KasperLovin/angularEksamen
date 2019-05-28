//import { Actions } from './../actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  email: string;
  password: string;

  constructor( private router: Router,private fb: FormBuilder, private AuthService: AuthService /* private actions: Actions */) 
  {

  }

  onSubmit(): void
  {
    console.log("onSubmit")

      //this.actions.setLoggedIn(true);
      console.log("1");
      this.AuthService.login(this.email, this.password).subscribe(result => {
        console.log("3");
      });
      console.log("2")
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
