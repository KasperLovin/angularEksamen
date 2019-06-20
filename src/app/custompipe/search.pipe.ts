import { Pipe, PipeTransform } from '@angular/core';
import { AppProduct } from '../models/app-product';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(products: AppProduct[], search?: any): any {
    if(search === undefined) return products;
    
    // Searchs for the key for the product
    return products.filter(product => product.key.indexOf(search) !== -1);
  }

}
