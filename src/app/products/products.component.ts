import { ShoppingCartService } from './../shopping-cart.service';
import { AppProduct } from 'src/app/models/app-product';
import { ProductService } from './../product.service';
import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgRedux, select } from 'ng2-redux';
import 'rxjs/add/operator/switchMap'
import { IAppState } from '../store';
import { INCREMENT } from '../actions';
import { Subscription, BehaviorSubject } from 'rxjs';
import { FirebaseDatabase } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  specificPics$: AngularFireList<any[]>;
  currentLike = new BehaviorSubject(null);

  counter = 0;
  products: any[] = [];
  filteredProducts: any[] = [];
  category: string;
  $key: string;


  constructor(private db: AngularFireDatabase, private ngRedux: NgRedux<IAppState>,ProductService: ProductService, route: ActivatedRoute, private cartService: ShoppingCartService) 
  { 
    

    var subscription = ngRedux.subscribe(() =>
    {
      var store = ngRedux.getState();
      this.counter = store.counter
    });
    
    // her bruger vi Switchmap, for at switche mellem observables
    ProductService.homeReadAll().switchMap(products =>
      {
        this.products = products;
        return route.queryParamMap;
      })
      .subscribe(params => { 
          this.category = params.get('category');
          
          console.log('1');
          this.filteredProducts = (this.category) ?
            this.products.filter(p => p.category === this.category) : 
            this.products;
       });

       // HOW TO GET AN ID AND DO SOMETHING WITH IT FIREBASE
    

  }

  addToCart(product: AppProduct)
  {
    this.cartService.addToCart(product);
  }

  // Redux!
  increment(title)
  {
    console.log(title);
    this.ngRedux.dispatch({ type: INCREMENT });

    // SPØRG HVORDAN JEG FÅR IDET MED OG OPDATER KUN DEN!
  }



  ngOnInit() {
    this.specificPics$ = this.db.list('/products');
  }
  
  changelikes(like)
  {
    this.currentLike.next(like)
  }

}
