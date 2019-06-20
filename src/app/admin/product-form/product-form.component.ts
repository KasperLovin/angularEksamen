import { browser } from 'protractor';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take'
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/app/interfaces';
import { setProduct } from 'src/app/redux/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  form: FormGroup;
  product = {};
  id;

  @select('currentProduct') currentProduct$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private CategoryService: CategoryService,
    private ProductService: ProductService,
    public ngRedux:  NgRedux<IAppState>,
    private router: Router) { 
    this.categories$ = CategoryService.adminReadAll();
  }

  save()
  {
    let product = this.form.value;

    if(this.id) 
    {
      console.log('Opdaterer')
      // Opdaterer produktet
      this.ProductService.update(this.id, product);
    }
    else
    {
      console.log("Laver Product")
      this.ProductService.create(product);

    }

      // Tilbage til listen af produkter
      console.log('Navigerer til admin/products')
      this.router.navigate(['/admin/products']);
  }

  delete()
  {
    if(!confirm('Are you sure u want to delete this product?')) return;
    {
      // Sletter udfra id'et
      this.ProductService.delete(this.id);

      // Tilbage til listen af produkter
      console.log('Navigerer til admin/products')
      this.router.navigate(['/admin/products']);
    }

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.form = this.fb.group(
      {
        id: [''],
        title: ['', [Validators.required, Validators.minLength(3)]], 
        price: ['', Validators.required],
        category: ['', Validators.required],
        imageUrl: ['', Validators.required]
      }
    )

    
    if (this.id) {
      this.ProductService.editProduct(this.id).subscribe(data =>{
        this.ngRedux.dispatch(setProduct(data));
        this.currentProduct$.subscribe(product => {
          this.form.setValue(product);
        });
      });
    }
    

  }

  get f() 
  {
    return this.form.controls;
    
  }
}
