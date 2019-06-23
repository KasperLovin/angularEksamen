import { jokeservice } from '../../services/joke.service';
import { CategoryService } from '../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take'
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/app/interfaces';
import { setjoke } from 'src/app/redux/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class jokeFormComponent implements OnInit {
  categories$;
  form: FormGroup;
  id;

  @select('currentjoke') currentjoke$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private CategoryService: CategoryService,
    private jokeservice: jokeservice,
    public ngRedux:  NgRedux<IAppState>,
    private router: Router) 
    { 
    this.categories$ = CategoryService.adminReadAll();
    }

  save()
  {
    let joke = this.form.value;

    if(this.id) 
    {
      console.log('Opdaterer')
      // Opdaterer produktet
      this.jokeservice.update(this.id, joke);
    }
    else
    {
      console.log("Laver joke")
      this.jokeservice.create(joke);

    }

      // Tilbage til listen af produkter
      console.log('Navigerer til admin/jokes')
      this.router.navigate(['/admin/jokes']);
  }

  delete()
  {
    if(!confirm('Are you sure u want to delete this joke?')) return;
    {
      this.jokeservice.delete(this.id);
      this.router.navigate(['/admin/jokes']);
    }
  }

  ngOnInit() 
  {
    this.id = this.route.snapshot.paramMap.get('id');
    this.form = this.fb.group(
      {
        id: [''],
        title: ['', [Validators.required, Validators.minLength(5)]], 
        description: ['', [Validators.required, Validators.minLength(10)]],
        category: ['', Validators.required],
        imageUrl: ['', Validators.required]
      }
    )

    if (this.id) 
    {
      this.jokeservice.editjoke(this.id).subscribe(data => {
        this.ngRedux.dispatch(setjoke(data));
      
        this.currentjoke$.subscribe(joke => {
          if(joke)
          {
            this.form.setValue(joke);
          }
        });
      });
    }
  }

  get f() 
  {
    return this.form.controls;
  }
}
