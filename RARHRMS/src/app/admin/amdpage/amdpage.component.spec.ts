import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdpageComponent } from './amdpage.component';

describe('AmdpageComponent', () => {
  let component: AmdpageComponent;
  let fixture: ComponentFixture<AmdpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmdpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmdpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
