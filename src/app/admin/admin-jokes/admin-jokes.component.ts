import { Observable } from 'rxjs/Observable';
import { jokeservice } from '../../services/joke.service';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/app/interfaces';
import { setjokes } from 'src/app/redux/actions';


@Component({
  selector: 'app-admin-jokes',
  templateUrl: './admin-jokes.component.html',
  styleUrls: ['./admin-jokes.component.css']
})
export class AdminjokesComponent implements OnInit {
  // This goes to your state and takes out the given path in the state
  // Select for the redux to know where to look
 @select('jokes') jokes$: Observable<any>;
 jokesearch: string; 

  constructor(
    private jokeservice: jokeservice, 
    public ngRedux: NgRedux<IAppState>) 
    {
      
    }

  ngOnInit() 
  {
    // uses the service
    // gets the data
    // dispatches the data and shows the state
   this.jokeservice.adminReadAll()
    .subscribe(jokes => {
      this.ngRedux.dispatch(setjokes(jokes));
    });
  }
}
