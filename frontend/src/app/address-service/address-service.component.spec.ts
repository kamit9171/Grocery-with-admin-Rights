import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressServiceComponent } from './address-service.component';

describe('AddressServiceComponent', () => {
  let component: AddressServiceComponent;
  let fixture: ComponentFixture<AddressServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressServiceComponent]
    });
    fixture = TestBed.createComponent(AddressServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
