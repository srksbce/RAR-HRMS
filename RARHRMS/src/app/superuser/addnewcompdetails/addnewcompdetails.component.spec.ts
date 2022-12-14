import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewcompdetailsComponent } from './addnewcompdetails.component';

describe('AddnewcompdetailsComponent', () => {
  let component: AddnewcompdetailsComponent;
  let fixture: ComponentFixture<AddnewcompdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewcompdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewcompdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
