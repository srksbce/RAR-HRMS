import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewInvoicesComponent } from './add-new-invoices.component';

describe('AddNewInvoicesComponent', () => {
  let component: AddNewInvoicesComponent;
  let fixture: ComponentFixture<AddNewInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
