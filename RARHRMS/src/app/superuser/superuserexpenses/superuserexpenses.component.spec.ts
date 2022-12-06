import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuserexpensesComponent } from './superuserexpenses.component';

describe('SuperuserexpensesComponent', () => {
  let component: SuperuserexpensesComponent;
  let fixture: ComponentFixture<SuperuserexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperuserexpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperuserexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
