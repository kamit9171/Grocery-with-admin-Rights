// cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];

  addToCart(items: any[]) {
    this.cartItems.push(...items);
  }
  addToCartt(grocery: any): void {
    this.cartItems.push(grocery);
  }

  getCartItems() {
    return this.cartItems;
  }
  isCartEmpty(): boolean {
    return this.cartItems.length === 0;
  }
}
