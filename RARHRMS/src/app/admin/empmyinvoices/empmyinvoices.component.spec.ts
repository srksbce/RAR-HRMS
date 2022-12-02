import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpmyinvoicesComponent } from './empmyinvoices.component';

describe('EmpmyinvoicesComponent', () => {
  let component: EmpmyinvoicesComponent;
  let fixture: ComponentFixture<EmpmyinvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpmyinvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpmyinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
