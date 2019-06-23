import { AuthService } from '../services/auth.service';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  email: string;
  password: string;

  constructor( 
    private AuthService: AuthService, 
    private snackbar: MatSnackBar) 
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
          console.log("2")
      });
      console.log("3")
      }
  }

  loginWithGoogle()
  {
    this.AuthService.loginWithGoogle();
  }

  signup() 
  {
    this.AuthService.signUp(this.email, this.password);
    this.email = this.password = '';
  }

}
