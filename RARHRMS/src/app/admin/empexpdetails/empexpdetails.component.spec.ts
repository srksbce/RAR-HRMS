import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpexpdetailsComponent } from './empexpdetails.component';

describe('EmpexpdetailsComponent', () => {
  let component: EmpexpdetailsComponent;
  let fixture: ComponentFixture<EmpexpdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpexpdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpexpdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
