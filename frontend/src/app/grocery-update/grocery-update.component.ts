import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Grocery } from '../grocery';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-grocery-update',
  templateUrl: './grocery-update.component.html',
  styleUrls: ['./grocery-update.component.css']
})
export class GroceryUpdateComponent {
  id: number = 0;
  grocery: Grocery = new Grocery();
  dateOfJoiningError = false;
  constructor(private route: ActivatedRoute, private router: Router, private groceryService: GroceryService, private authService: AuthService){}

  ngOnInit(): void {
    if(!this.authService.isLoggedIn()){
      console.log('Error: Login to Authorize');
      this.router.navigate(['/error']);
    }
    else{
      this.grocery = new Grocery();
      this.id = this.route.snapshot.params['id'];
  
      this.groceryService.getGrocery(this.id).subscribe(data => {
        console.log(data);
        this.grocery = data;
      }, error => console.log(error));
    }
  }

  // In your component class
predefinedItems: string[] = ["Rice", "Wheat Flour", "Sugar", "Salt","Dal","Oats","Mustard Oil","Refined Oil"];

onItemNameChange(event: any): void {
    // Set the input field value to the selected dropdown value
    this.grocery.itemName = event.target.value;
}


  updateGrocery() {
    this.groceryService.updateGrocery(this.id, this.grocery).subscribe(data => {
      console.log(data);
      this.grocery = new Grocery();
      this.gotoList();
    }, error => console.log(error));
  }

  isDateInFuture(dateString: string): boolean{
    const today = new Date();
    const date = new Date(dateString);
    console.log(date>today);
    return date > today;
  }

 /* validateDateOfJoining(){
    this.dateOfJoiningError = this.isDateInFuture(this.grocery.dateOfJoining);
  }
  */

  gotoList(){
    this.router.navigate(['/']);
  }

  goBack(){
    this.router.navigate(['/']);
  }

}

