import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product)
  {
    return this.db.list('/products').push(product);
  }

  readAll()
  {
    return this.db.list('/products').snapshotChanges();
  }

  get(productId)
  {
    return this.db.object('/products/' + productId);
  }

  update(productId, product)
  {
    return this.db.object('/products/' + productId).update(product);
  }
  
  delete(productId)
  {
    return this.db.object('/products/' + productId).remove();
  }
}
