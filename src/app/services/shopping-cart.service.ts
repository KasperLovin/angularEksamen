import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  item$: Observable<any[]>;
  itemRef: AngularFireList<any>;
  cartId;

  constructor(private db: AngularFireDatabase) 
  {

  }

  private test(cartId, jokeId)
  {
    this.itemRef = this.db.list('/shopping-carts/' + cartId + '/items/' + jokeId);
  }

  private create()
  {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }
  private createItem()
  {
    return this.db.list('/shopping-carts').push({

    });
  }
  private getCart(cartId: string)
  {
    this.db.object('shopping-carts/' + cartId);
  }

  private getItem(cartId, jokeId)
  {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + jokeId);
  }

  private async getOrCreateCartId()
  {
    let cartId = localStorage.getItem('cartId');
    if(cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key
  }



  async addToCart(joke)
  {
    this.cartId = await this.getOrCreateCartId();

    let item$ = this.getItem(this.cartId, joke.key);
    //let item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + joke.key);

    item$.snapshotChanges().pipe(take(1)).subscribe((item:any) => {

      console.log("HEJHEJ" + item.payload.val());
    })
    /*
    item$.snapshotChanges().pipe(take(1)).subscribe((item : any) =>{
      if(!item.payload.val()){
        item$.set({
          quantity: item.payload.val().quantity +1
        })
    }
    else
    {
      item$.update({
        joke: joke.payload.val(),
        quantity:1
      })
    }
  })
  */
}
}