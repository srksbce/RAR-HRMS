import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuserinvoiceComponent } from './superuserinvoice.component';

describe('SuperuserinvoiceComponent', () => {
  let component: SuperuserinvoiceComponent;
  let fixture: ComponentFixture<SuperuserinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperuserinvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperuserinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
