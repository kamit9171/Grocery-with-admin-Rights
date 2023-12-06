import { Component } from '@angular/core';

@Component({
  selector: 'app-address-service',
  templateUrl: './address-service.component.html',
  styleUrls: ['./address-service.component.css']
})
export class AddressServiceComponent {


  address: any = {}; // You may want to create a model for the address

  onSubmit() {
    // Implement your checkout logic using this.address
    console.log('Checkout with address:', this.address);
  }
}

