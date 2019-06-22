import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminjokesComponent } from './admin-jokes.component';

describe('AdminjokesComponent', () => {
  let component: AdminjokesComponent;
  let fixture: ComponentFixture<AdminjokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminjokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminjokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
