import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticHeaderComponent } from './authentic-header.component';

describe('AuthenticHeaderComponent', () => {
  let component: AuthenticHeaderComponent;
  let fixture: ComponentFixture<AuthenticHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
