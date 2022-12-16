import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAccessComponent } from './custom-access.component';

describe('CustomAccessComponent', () => {
  let component: CustomAccessComponent;
  let fixture: ComponentFixture<CustomAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
