import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticFooterComponent } from './authentic-footer.component';

describe('AuthenticFooterComponent', () => {
  let component: AuthenticFooterComponent;
  let fixture: ComponentFixture<AuthenticFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
