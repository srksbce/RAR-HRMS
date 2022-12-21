import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewapprovalComponent } from './newapproval.component';

describe('NewapprovalComponent', () => {
  let component: NewapprovalComponent;
  let fixture: ComponentFixture<NewapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewapprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
