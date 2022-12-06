import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpmyexpensesComponent } from './empmyexpenses.component';

describe('EmpmyexpensesComponent', () => {
  let component: EmpmyexpensesComponent;
  let fixture: ComponentFixture<EmpmyexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpmyexpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpmyexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
