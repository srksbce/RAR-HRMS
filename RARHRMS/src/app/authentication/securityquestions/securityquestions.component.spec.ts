import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityquestionsComponent } from './securityquestions.component';

describe('SecurityquestionsComponent', () => {
  let component: SecurityquestionsComponent;
  let fixture: ComponentFixture<SecurityquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityquestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
