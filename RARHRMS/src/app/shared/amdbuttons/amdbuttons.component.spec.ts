import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdbuttonsComponent } from './amdbuttons.component';

describe('AmdbuttonsComponent', () => {
  let component: AmdbuttonsComponent;
  let fixture: ComponentFixture<AmdbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmdbuttonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmdbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
