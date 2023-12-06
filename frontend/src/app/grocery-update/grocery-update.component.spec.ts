import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryUpdateComponent } from './grocery-update.component';

describe('GroceryUpdateComponent', () => {
  let component: GroceryUpdateComponent;
  let fixture: ComponentFixture<GroceryUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroceryUpdateComponent]
    });
    fixture = TestBed.createComponent(GroceryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
