import { Grocery } from '../grocery';
import { GroceryService } from '../grocery.service';
import { AuthService } from '../auth/auth.service';

import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  grocerys: Grocery[] = [];
  selectedGrocerys: Grocery[] = [];
  selectedCount: number = this.selectedGrocerys.length;
  

  constructor(
    private groceryService: GroceryService,
    private router: Router,
    public authService: AuthService,
    private cartService: CartService,
    
    ){}

    ngOnInit() {
      this.getGrocerys();
    }
    getGrocerys(): void {
      this.groceryService.getGrocerys().subscribe(grocerys => {
        // Set default quantity to 1 for each grocery
        this.grocerys = grocerys.map(grocery => ({ ...grocery, quantity: 1 }));
        console.log(this.grocerys); // Log the modified grocerys array
      });
    }
    deleteGrocerys(): void {
      if(!this.authService.isLoggedIn()){
        console.log('Error: Login to Authorize');
        this.router.navigate(['/error']);
      }
      else{
        console.log(this.selectedGrocerys);
        const ids = this.selectedGrocerys.map(grocery => grocery.id);
        this.groceryService.deleteGrocery(ids).subscribe(() => {
          this.grocerys = this.grocerys.filter(grocery => !ids.includes(grocery.id));
          this.selectedGrocerys = [];
      })
      this.router.navigate(['/']);
    }
  }
  selectAll(event: Event): void {
    const target = event.target as HTMLInputElement; 
    if(target.checked){
      this.selectedGrocerys = [...this.grocerys];
    }
    else{
      this.selectedGrocerys = [];
    }
  }
  onSelect(grocery: Grocery, event: Event): void {
    const target = event.target as HTMLInputElement; 

    if(target.checked){
      this.selectedGrocerys = this.selectedGrocerys.concat(this.grocerys.filter(emp => emp.id == grocery.id));
    }
    else{
      this.selectedGrocerys = this.selectedGrocerys.filter(emp => emp.id != grocery.id);
    }
  }

  isChecked(grocery: any): boolean{
    return this.selectedGrocerys.includes(grocery);
  }

  goToCreate() : void {
    this.router.navigate(['/add-grocery']);
  }

  goToUpdate(grocery: Grocery): void {
    this.router.navigate(['/update-grocery/', grocery.id]);
  }
  selected: any = null;
  buySelected() {
    const selectedGrocerys = this.grocerys.filter(grocery => this.selectedGrocerys.some(selectedGrocery => selectedGrocery.id === grocery.id));
    this.cartService.addToCart(selectedGrocerys);
    // You can also remove the selected grocerys from the main list if needed
    this.selectedGrocerys = [];
   
    this.router.navigate(['/cart']);
  }
  increaseQuantity(grocery: Grocery): void {
    grocery.quantity++;
}
itemAddedSuccessfully: boolean = false;
selectedGrocery: any = null;

buySingleItem(grocery: any): void {
  this.cartService.addToCartt(grocery);
  this.selectedGrocery = grocery;

  // Optionally, you can reset the selected item after a certain time
  setTimeout(() => {
    this.selectedGrocery = null;
  }, 3000); // 3000 milliseconds (adjust as needed)
}


decreaseQuantity(grocery: Grocery): void {
    if (grocery.quantity > 1) {
        grocery.quantity--;
    }
}

  
  
  
}
