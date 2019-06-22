import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable, Pipe } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, throwError, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from '../models/app-user';
import { UserService } from './user.service';
import { tap, delay } from 'rxjs/operators';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of'
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../interfaces';
import { setLoginStatus } from '../redux/actions';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    userRef: AngularFireObject<any>;
    isLoggedIn: boolean;

    // $ betyder at den er en observable og subscriber
    user$: Observable<firebase.User>;


  constructor(
    private db: AngularFireDatabase,
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    public ngRedux: NgRedux<IAppState>) {
    this.user$ = afAuth.authState;
    this.afAuth.authState.subscribe(response =>
      {
        if (response && response.uid)
        {
          this.ngRedux.dispatch(setLoginStatus(true));
          console.log("user is logged in");
        }
        else
        {
          this.ngRedux.dispatch(setLoginStatus(false));
          console.log("user is not logged in");
        }
      });
   }

  loginWithGoogle()
  {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    console.log('logging in');
    // redirecter dig til google login
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  login(email: string, password: string):  Observable<boolean> 
  {
    const obs = this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        this.isLoggedIn = true;
        this.snackbar.open('Welcome ' + value.user.email, 'Have a nice day!',{
          duration:7000
        });
      })
        .catch(err => { 
          this.isLoggedIn = false; 
          this.snackbar.open(err, 'Try again',{
            duration:7000
          });
        });
        // Making delay to show network calls
      return Observable.of(null).pipe(delay(2000));
  }

  signUp(email: string, password: string)
  {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log(value.user.uid);
      this.updateUserViaValue(value);
      console.log('Success!', value);
      this.snackbar.open('Welcome ' + value.user.email, 'Have a nice day!',{
        duration:7000
      });
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
      this.snackbar.open(err, 'Try again',{
        duration:7000
      });
    }); 
  }

  updateUserViaValue(value)
  {
    this.userRef = this.db.object("users/" + value.user.uid)
    this.userRef.update({
      email: value.user.email,
      isAdmin: false
    })
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
