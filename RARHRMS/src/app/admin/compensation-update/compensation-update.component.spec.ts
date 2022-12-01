import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationUpdateComponent } from './compensation-update.component';

describe('CompensationUpdateComponent', () => {
  let component: CompensationUpdateComponent;
  let fixture: ComponentFixture<CompensationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompensationUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompensationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
