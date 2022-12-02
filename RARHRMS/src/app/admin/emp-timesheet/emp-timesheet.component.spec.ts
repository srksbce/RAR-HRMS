import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTimesheetComponent } from './emp-timesheet.component';

describe('EmpTimesheetComponent', () => {
  let component: EmpTimesheetComponent;
  let fixture: ComponentFixture<EmpTimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpTimesheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
