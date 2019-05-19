import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take'

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

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private CategoryService: CategoryService,
    private ProductService: ProductService,
    private router: Router) { 
    this.categories$ = CategoryService.adminReadAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.ProductService.get(this.id).take(1).subscribe(data =>{
       this.form.setValue(data)})
    
  }
  save()
  {
    let product = this.form.value;
    
    if(this.id) 
    {
      console.log('Opdaterer')
      // Opdaterer produktet
      this.ProductService.update(this.id, product)
    }
    else
    {
      console.log('Opretter')
      // Laver produktet
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
    this.form = this.fb.group(
      {
        title: ['', Validators.required], 
        price: ['', Validators.required],
        category: ['', Validators.required],
        imageUrl: ['', Validators.required]
      }
    )
  }

  get f() 
  {
    return this.form.controls;
  }
}
