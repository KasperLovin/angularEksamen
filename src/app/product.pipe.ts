import { AppProduct } from './models/app-product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPipe' //used when I apply the pipe(filter)
})
export class ProductPipe implements PipeTransform {

  transform(products: AppProduct[], search?: any): any {
    console.log(search);
    if(!search) return products;
    return products.filter(product => product.title.indexOf(search) !== -1);
  }
}
