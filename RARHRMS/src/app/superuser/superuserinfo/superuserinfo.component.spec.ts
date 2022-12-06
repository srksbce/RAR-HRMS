import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuserinfoComponent } from './superuserinfo.component';

describe('SuperuserinfoComponent', () => {
  let component: SuperuserinfoComponent;
  let fixture: ComponentFixture<SuperuserinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperuserinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperuserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
