import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuserlayoutComponent } from './superuserlayout.component';

describe('SuperuserlayoutComponent', () => {
  let component: SuperuserlayoutComponent;
  let fixture: ComponentFixture<SuperuserlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperuserlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperuserlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
