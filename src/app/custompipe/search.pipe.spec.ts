import { Appjoke } from './../models/app-joke';

import { SearchPipe } from './search.pipe';

describe('searchPipe', () => {
  const pipe = new SearchPipe();
  const jokes: Appjoke[] = [{
    key: '-LhoNyW90OY9MrDOE-n8',
    id: 1,
    title: 'Test',
    price: 10,
    category: 'bread',
    imageUrl: 'noget'
  }]

  it('All jokes matches search \"\"', () =>{
    let result = pipe.transform(jokes, '');
    expect(result.length).toBe(jokes.length);
    
  });
  it('Search key', () => {
    let search = '-LhoNyW90OY9MrDOE-n8'
    let result = pipe.transform(jokes, search);
    expect(result.length).toBe(1);
    for (let i = 0; i < result.length; i++) {
      expect(result[i].key).toContain(search);
    }
  });
});
