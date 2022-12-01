import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationdataComponent } from './organizationdata.component';

describe('OrganizationdataComponent', () => {
  let component: OrganizationdataComponent;
  let fixture: ComponentFixture<OrganizationdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
