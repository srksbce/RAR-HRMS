import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeExpensedataComponent } from './employee-expensedata.component';

describe('EmployeeExpensedataComponent', () => {
  let component: EmployeeExpensedataComponent;
  let fixture: ComponentFixture<EmployeeExpensedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeExpensedataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeExpensedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
