import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { jokesComponent } from './jokes.component';

describe('jokesComponent', () => {
  let component: jokesComponent;
  let fixture: ComponentFixture<jokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ jokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(jokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
