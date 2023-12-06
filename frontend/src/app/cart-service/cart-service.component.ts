import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { NgZone } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cart-service',
  templateUrl: './cart-service.component.html',
  styleUrls: ['./cart-service.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CartServiceComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;
  totalProduct: number = 0;

  constructor(private cartService: CartService, private ngZone: NgZone,private cdr: ChangeDetectorRef, private router:Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalSalary();
    this.calculatetotalProduct(); // Call the method to calculate total product
  }

  
    
  
  

  calculatetotalProduct() {
    this.totalProduct = this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  }
  calculateTotalSalary() {
    this.ngZone.run(() => {
      this.calculatetotalProduct();
      const someOtherValue = 100; // Replace with the desired value
      this.totalPrice = this.totalProduct;
      this.cdr.detectChanges(); // Manually trigger change detection
    });
  }

  
  
  

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.calculateTotalSalary();
    this.calculatetotalProduct();
  }

  increaseQuantity(count: number): void {
    this.cartItems[count].quantity++;
    this.calculatetotalProduct(); // Call the method to recalculate total product
  }

  decreaseQuantity(count: number): void {
    if (this.cartItems[count].quantity > 1) {
      this.cartItems[count].quantity--;
      this.calculatetotalProduct(); // Call the method to recalculate total product
    }
  }

  checkout() {
    // Implement your checkout logic here
  }
  isCartEmpty(): boolean {
    return this.cartItems.length === 0;
  }
  goBack(){
    this.router.navigate(['/']);
  }
  
}
