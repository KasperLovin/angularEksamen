import { Appjoke } from 'src/app/models/app-joke';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class jokeservice {

  constructor(private db: AngularFireDatabase) { }

  create(joke)
  {
    return this.db.list('/jokes/').push(joke);
  }

  adminReadAll()
  {
    return this.db.list('/jokes/').snapshotChanges();
  }
  homeReadAll()
  {
    return this.db.list('/jokes/').valueChanges();
  }

  editjoke(jokeId)
  {
    return this.db.object('/jokes/' + jokeId).valueChanges();
  }

  update(jokeId, joke)
  {
    return this.db.object('/jokes/' + jokeId).update(joke);
  }
  
  delete(jokeId)
  {
    return this.db.object('/jokes/' + jokeId).remove();
  }

  /*
  https://www.youtube.com/watch?v=wttrtrfy8YU&list=PL8jcXf-CLpxptJ2mE4xnVd5I0iSGnabEc&index=38
  getjokeId(id: string): Observable<any>
  {
    return this.db.object("jokes/" + id).valueChanges();
  }
  */
}
