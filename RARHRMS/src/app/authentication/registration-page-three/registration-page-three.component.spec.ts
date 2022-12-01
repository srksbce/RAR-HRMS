import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPageThreeComponent } from './registration-page-three.component';

describe('RegistrationPageThreeComponent', () => {
  let component: RegistrationPageThreeComponent;
  let fixture: ComponentFixture<RegistrationPageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPageThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
