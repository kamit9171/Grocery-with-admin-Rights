import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryDetailsComponent } from './grocery-details.component';

describe('GroceryDetailsComponent', () => {
  let component: GroceryDetailsComponent;
  let fixture: ComponentFixture<GroceryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroceryDetailsComponent]
    });
    fixture = TestBed.createComponent(GroceryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
