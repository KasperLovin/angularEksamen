import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AppUser } from '../models/app-user';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private db: AngularFireDatabase) 
    {

    }

  save(user: firebase.User)
  {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  // Får fat i Firebase Userens id!
  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid);
    }
}
