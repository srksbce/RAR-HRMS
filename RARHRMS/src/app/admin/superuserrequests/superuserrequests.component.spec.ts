import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuserrequestsComponent } from './superuserrequests.component';

describe('SuperuserrequestsComponent', () => {
  let component: SuperuserrequestsComponent;
  let fixture: ComponentFixture<SuperuserrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperuserrequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperuserrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
