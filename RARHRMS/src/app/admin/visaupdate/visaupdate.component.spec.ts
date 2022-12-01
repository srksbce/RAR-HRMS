import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaupdateComponent } from './visaupdate.component';

describe('VisaupdateComponent', () => {
  let component: VisaupdateComponent;
  let fixture: ComponentFixture<VisaupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
