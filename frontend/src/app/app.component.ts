

import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeJwtApp';
  cartService: any;

  constructor(private _service: AuthService, private _router: Router) {
  }

  isLoggedIn(){
    return this._service.isLoggedIn();
  }

  logout(){
    this._service.logout();
    this._router.navigate(["/"]);
  }
 
  

}



