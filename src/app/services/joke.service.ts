import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class jokeservice {

  constructor(
    private db: AngularFireDatabase) 
    {

    }

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
}
