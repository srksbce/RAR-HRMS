import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpageComponent } from './launchpage.component';

describe('LaunchpageComponent', () => {
  let component: LaunchpageComponent;
  let fixture: ComponentFixture<LaunchpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
