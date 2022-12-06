import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmppersonaldataComponent } from './emppersonaldata.component';

describe('EmppersonaldataComponent', () => {
  let component: EmppersonaldataComponent;
  let fixture: ComponentFixture<EmppersonaldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmppersonaldataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmppersonaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
