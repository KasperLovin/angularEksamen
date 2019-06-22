import { Pipe, PipeTransform } from '@angular/core';
import { Appjoke } from '../models/app-joke';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(jokes: Appjoke[], search?: any): any {
    if(search === undefined) return jokes;
    
    // Searchs for the key for the joke
    return jokes.filter(joke => joke.key.indexOf(search) !== -1);
  }

}
