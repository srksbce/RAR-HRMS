import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarsetComponent } from './navbarset.component';

describe('NavbarsetComponent', () => {
  let component: NavbarsetComponent;
  let fixture: ComponentFixture<NavbarsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
