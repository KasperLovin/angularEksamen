import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    // $ betyder at den er en observable og subscriber
    user$: Observable<firebase.User>;


  constructor(private userService: UserService, private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
    this.afAuth.authState.subscribe(response =>
      {
        if (response && response.uid)
        {
          console.log("user is logged in");
        }
        else
        {
          console.log("user is not logged in");
        }
      });
   }

  login()
  {
    console.log('Gemmer snapshot (DET URL VI VIL TIL EFTER)');
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    console.log('logging in');
    // redirecter dig til google login
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout()
  {
    console.log("logging out")
    this.afAuth.auth.signOut();
  }

  get appUser$() : Observable<AppUser>
  {
      return this.user$
      .switchMap(user =>{
        if(user) return this.userService.get(user.uid).valueChanges(); 

        return Observable.of(null);
      });
  }
}
