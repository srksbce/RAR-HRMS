import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreqsComponent } from './myreqs.component';

describe('MyreqsComponent', () => {
  let component: MyreqsComponent;
  let fixture: ComponentFixture<MyreqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyreqsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyreqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
