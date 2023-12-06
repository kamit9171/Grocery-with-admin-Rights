import { Component, OnInit } from '@angular/core';
import { Grocery } from '../grocery';
import { Router } from '@angular/router';
import { GroceryService } from '../grocery.service';
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.css']
})
export class AddGroceryComponent implements OnInit{
  grocery: Grocery = new Grocery();
  dateOfJoiningError = false;

  constructor(private router: Router, private groceryService: GroceryService, private authService: AuthService){}

  ngOnInit(): void {
    if(!this.authService.isLoggedIn()){
      console.log('Error: Login to Authorize');
      this.router.navigate(['/error']);
    }
  }

  onSubmit(){
    this.groceryService.addGrocery(this.grocery).subscribe(data => {
      console.log(data);
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    })
  }

  goBack(){
    this.router.navigate(['/']);
  }

  isDateInFuture(dateString: string): boolean{
    const today = new Date();
    const date = new Date(dateString);
    console.log(date>today);
    return date > today;
  }
  /*validateDateOfJoining(){
    this.dateOfJoiningError = this.isDateInFuture(this.grocery.dateOfJoining);
  }
  */

}



