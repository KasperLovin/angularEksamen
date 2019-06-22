import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { jokeFormComponent } from './joke-form.component';

describe('jokeFormComponent', () => {
  let component: jokeFormComponent;
  let fixture: ComponentFixture<jokeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ jokeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(jokeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
