import { Appjoke } from './../models/app-joke';

import { SearchPipe } from './search.pipe';

fdescribe('searchPipe', () => {
  const pipe = new SearchPipe();
  const jokes: Appjoke[] = [
    {
      key: '-LhzGPF_0VOYp6pvZxGt',
      id: 1,
      title: 'Test',
      description: "sjovt",
      category: 'dad jokes',
      imageUrl: 'noget'
    },
    {
      key: '-LhzGPF_0VOYp6pvZxGt2',
      id: 2,
      title: 'Test1',
      description: "sjovt1",
      category: 'dad jokes',
      imageUrl: 'noget1'
    },
    {
      key: 'randomkey',
      id: 3,
      title: 'Test1',
      description: "sjovt1",
      category: 'dad jokes',
      imageUrl: 'noget1'
    }
]

  it('Find all the jokes by search nothing', () => {
    let search = ''
    let result = pipe.transform(jokes, search);
    expect(result.length).toBe(jokes.length);
    
  });
  it('Search for key', () => {
    let search = '-LhzGPF_0VOYp6pvZxGt'
    let result = pipe.transform(jokes, search);
    expect(result.length).toBe(2);

    for (let i = 0; i < result.length; i++) 
    {
      expect(result[i].key).toContain(search);
    }
  });
});
