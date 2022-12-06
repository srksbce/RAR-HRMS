import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpMyrequestsComponent } from './emp-myrequests.component';

describe('EmpMyrequestsComponent', () => {
  let component: EmpMyrequestsComponent;
  let fixture: ComponentFixture<EmpMyrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpMyrequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpMyrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
