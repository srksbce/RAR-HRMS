import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppersonaldataComponent } from './suppersonaldata.component';

describe('SuppersonaldataComponent', () => {
  let component: SuppersonaldataComponent;
  let fixture: ComponentFixture<SuppersonaldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppersonaldataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppersonaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
