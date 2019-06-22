import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { jokeFilterComponent } from './joke-filter.component';

describe('jokeFilterComponent', () => {
  let component: jokeFilterComponent;
  let fixture: ComponentFixture<jokeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ jokeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(jokeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
