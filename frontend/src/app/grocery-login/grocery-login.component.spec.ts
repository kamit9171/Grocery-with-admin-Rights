import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryLoginComponent } from './grocery-login.component';

describe('GroceryLoginComponent', () => {
  let component: GroceryLoginComponent;
  let fixture: ComponentFixture<GroceryLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroceryLoginComponent]
    });
    fixture = TestBed.createComponent(GroceryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
