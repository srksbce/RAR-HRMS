import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdocumentdataComponent } from './empdocumentdata.component';

describe('EmpdocumentdataComponent', () => {
  let component: EmpdocumentdataComponent;
  let fixture: ComponentFixture<EmpdocumentdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpdocumentdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpdocumentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
