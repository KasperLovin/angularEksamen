import { CategoryService } from '../../services/category.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'joke-filter',
  templateUrl: './joke-filter.component.html',
  styleUrls: ['./joke-filter.component.css']
})
export class jokeFilterComponent implements OnInit {
  categories$;
  @Input('category') category;

  constructor(CategoryService: CategoryService) { 
    this.categories$ = CategoryService.homeReadAll();

  }

  ngOnInit() {
  }

}
