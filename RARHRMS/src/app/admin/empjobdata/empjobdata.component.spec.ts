import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpjobdataComponent } from './empjobdata.component';

describe('EmpjobdataComponent', () => {
  let component: EmpjobdataComponent;
  let fixture: ComponentFixture<EmpjobdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpjobdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpjobdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
