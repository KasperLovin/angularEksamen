import { jokeservice } from '../services/joke.service';
import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class jokesComponent implements OnInit {

  specificPics$: AngularFireList<any[]>;

  jokes: any[] = [];
  filteredjokes: any[] = [];
  category: string;
  $key: string;
  id;
  jokesearch: string;


  constructor(
    private db: AngularFireDatabase, 
    private jokeservice: jokeservice, 
    route: ActivatedRoute) 
  { 
    
    // her bruger vi Switchmap, for at switche mellem observables
    jokeservice.homeReadAll().switchMap(jokes =>
      {
        this.jokes = jokes;
        return route.queryParamMap;
      })
      .subscribe(params => { 
          this.category = params.get('category');
          this.filteredjokes = (this.category) ?
            this.jokes.filter(p => p.category === this.category) : 
            this.jokes;
       });
  }



  ngOnInit() {
    this.specificPics$ = this.db.list('/jokes');
  }

}
