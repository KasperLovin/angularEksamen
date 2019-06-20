import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  adminReadAll()
  {
    // Sorterer!
    return this.db.list('/categories', 
      ref => ref.orderByChild('name')).snapshotChanges();
  }
  homeReadAll()
  {
    // Sorterer!
    return this.db.list('/categories', 
      ref => ref.orderByChild('name')).snapshotChanges();
  }
}
