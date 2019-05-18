import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private AuthService: AuthService, router: Router)
  {

    AuthService.user$.subscribe(user => {
      if(user)
      {
        // Gemmer i databasen eller laver ham!
        userService.save(user);

        // Her får vi den lokale storrage, 
        // så vi kan navigere useren tilbage til hvor han ville hen.
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}


