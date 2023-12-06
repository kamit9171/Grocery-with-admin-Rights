

import { Component } from '@angular/core';
import { Grocery } from '../grocery';
import { ActivatedRoute, Router } from '@angular/router';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-grocery-details',
  templateUrl: './grocery-details.component.html',
  styleUrls: ['./grocery-details.component.css']
})
export class GroceryDetailsComponent {
  grocery: Grocery = new Grocery();
  id: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private groceryService: GroceryService,
  ){}

  ngOnInit(): void {
    this.grocery = new Grocery();
    this.id = this.route.snapshot.params['id'];
    this.getGrocery();
  }

  getGrocery(): void {
    this.groceryService.getGrocery(this.id).subscribe((data) => this.grocery = data);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

}



