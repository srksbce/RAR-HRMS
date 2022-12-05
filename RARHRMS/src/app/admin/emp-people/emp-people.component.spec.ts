import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPeopleComponent } from './emp-people.component';

describe('EmpPeopleComponent', () => {
  let component: EmpPeopleComponent;
  let fixture: ComponentFixture<EmpPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
