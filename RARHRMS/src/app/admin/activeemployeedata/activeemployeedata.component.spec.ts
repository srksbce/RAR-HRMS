import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveemployeedataComponent } from './activeemployeedata.component';

describe('ActiveemployeedataComponent', () => {
  let component: ActiveemployeedataComponent;
  let fixture: ComponentFixture<ActiveemployeedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveemployeedataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveemployeedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
