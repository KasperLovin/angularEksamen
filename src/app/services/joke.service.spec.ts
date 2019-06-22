import { TestBed } from '@angular/core/testing';

import { jokeservice } from './joke.service';

describe('jokeservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: jokeservice = TestBed.get(jokeservice);
    expect(service).toBeTruthy();
  });
});
