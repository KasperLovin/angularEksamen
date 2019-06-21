import { AppProduct } from './../models/app-product';

import { SearchPipe } from './search.pipe';

describe('searchPipe', () => {
  const pipe = new SearchPipe();
  const products: AppProduct[] = [{
    key: '-LhoNyW90OY9MrDOE-n8',
    id: 1,
    title: 'Test',
    price: 10,
    category: 'bread',
    imageUrl: 'noget'
  }]

  it('All Products matches search \"\"', () =>{
    let result = pipe.transform(products, '');
    expect(result.length).toBe(products.length);
    
  });
  it('Search key', () => {
    let search = '-LhoNyW90OY9MrDOE-n8'
    let result = pipe.transform(products, search);
    expect(result.length).toBe(1);
    for (let i = 0; i < result.length; i++) {
      expect(result[i].key).toContain(search);
    }
  });
});
