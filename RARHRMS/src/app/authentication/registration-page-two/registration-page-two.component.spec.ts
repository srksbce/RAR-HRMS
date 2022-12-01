import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPageTwoComponent } from './registration-page-two.component';

describe('RegistrationPageTwoComponent', () => {
  let component: RegistrationPageTwoComponent;
  let fixture: ComponentFixture<RegistrationPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
