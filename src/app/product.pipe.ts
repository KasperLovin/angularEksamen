import { Pipe, PipeTransform } from '@angular/core';
import { AppProduct } from './models/app-product';

@Pipe({
  name: 'productPipe' //used when I apply the pipe(filter)
})
export class ProductPipe implements PipeTransform {

  transform(products: AppProduct[], search?: any): any {
    if(search === undefined) return products;
    
    // Searchs for the key for the product
    return products.filter(product => product.key.indexOf(search) !== -1);
  }
}
