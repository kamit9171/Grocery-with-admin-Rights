import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Logger } from './auth/logger';
import { AuthInterceptor } from './auth/auth.interceptor';
import { GroceryService } from './grocery.service';
import { AddGroceryComponent } from './add-grocery/add-grocery.component';
import { GroceryDetailsComponent } from './grocery-details/grocery-details.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceryLoginComponent } from './grocery-login/grocery-login.component';
import { GroceryUpdateComponent } from './grocery-update/grocery-update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { CartServiceComponent } from './cart-service/cart-service.component';
import { CartService } from './cart.service';
import { AddressServiceComponent } from './address-service/address-service.component';


@NgModule({
  declarations: [
    AppComponent,
    AddGroceryComponent,
    GroceryDetailsComponent,
    GroceryListComponent,
    GroceryLoginComponent,
    GroceryUpdateComponent,
    NotFoundComponent,
    ErrorComponent,
    CartServiceComponent,
    AddressServiceComponent
  ],
  imports: [BrowserModule, FormsModule,
    HttpClientModule, AppRoutingModule,
    

  ],
  providers: [GroceryService, CartService ,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    
    multi: true
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Logger,
      multi: true
    }
    
  ]
  ,

  bootstrap: [AppComponent]
})
export class AppModule { }
