import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  category: string;


  constructor(ProductService: ProductService, route: ActivatedRoute) { 
    
    // her bruger vi Switchmap, for at switche mellem observables
    ProductService
      .homeReadAll()
      .switchMap(products =>
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
    

    // For at lave det blå i categories
    

  }

  ngOnInit() {
  }

}
