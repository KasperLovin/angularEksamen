import { ShoppingCartService } from '../services/shopping-cart.service';
import { Appjoke } from 'src/app/models/app-joke';
import { jokeservice } from '../services/joke.service';
import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap'
import { Subscription, BehaviorSubject } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class jokesComponent implements OnInit {

  specificPics$: AngularFireList<any[]>;
  currentLike = new BehaviorSubject(null);

  counter = 0;
  jokes: any[] = [];
  filteredjokes: any[] = [];
  category: string;
  $key: string;
  id;
  jokesearch: string;


  constructor(private db: AngularFireDatabase, private jokeservice: jokeservice, route: ActivatedRoute, private cartService: ShoppingCartService) 
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

       // HOW TO GET AN ID AND DO SOMETHING WITH IT FIREBASE
    

  }

  addToCart(joke: Appjoke)
  {
    this.cartService.addToCart(joke);
  }



  ngOnInit() {
    this.specificPics$ = this.db.list('/jokes');
  }

}
