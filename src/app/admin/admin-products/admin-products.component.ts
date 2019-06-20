import { Observable } from 'rxjs/Observable';
import { ProductService } from '../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/app/interfaces';
import { setProducts } from 'src/app/redux/actions';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  // This goes to your state and takes out the given path in the state
 @select('products') products$: Observable<any>;
 productSearch: string; 

  constructor(
    private ProductService: ProductService,
    public ngRedux: NgRedux<IAppState>,
    ) { 
  }

  ngOnInit() {
   this.ProductService.adminReadAll()
    .subscribe(products => {
      this.ngRedux.dispatch(setProducts(products));
    });
    }
}
