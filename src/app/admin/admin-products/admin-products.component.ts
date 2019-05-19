import { AppProduct } from './../../models/app-product';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$;
  products: AppProduct[];
  userSearch: string;

  constructor(private ProductService: ProductService) { 
    this.products$ = this.ProductService.readAll();
  }

  ngOnInit() {
    }

}
