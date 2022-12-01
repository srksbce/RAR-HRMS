import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollexpensesComponent } from './payrollexpenses.component';

describe('PayrollexpensesComponent', () => {
  let component: PayrollexpensesComponent;
  let fixture: ComponentFixture<PayrollexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollexpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
