import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementExpensesComponent } from './management-expenses.component';

describe('ManagementExpensesComponent', () => {
  let component: ManagementExpensesComponent;
  let fixture: ComponentFixture<ManagementExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementExpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
