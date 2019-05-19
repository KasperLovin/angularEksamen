import { AppProduct } from 'src/app/models/app-product';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product)
  {
    return this.db.list('/products/').push(product);
  }

  adminReadAll()
  {
    return this.db.list('/products/').snapshotChanges();
  }
  homeReadAll()
  {
    return this.db.list('/products/').valueChanges();
  }

  get(productId)
  {
    return this.db.object('/products/' + productId).valueChanges();
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
