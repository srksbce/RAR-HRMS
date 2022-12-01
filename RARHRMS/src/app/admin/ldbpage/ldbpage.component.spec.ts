import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdbpageComponent } from './ldbpage.component';

describe('LdbpageComponent', () => {
  let component: LdbpageComponent;
  let fixture: ComponentFixture<LdbpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdbpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LdbpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
