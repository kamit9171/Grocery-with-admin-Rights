import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { AddGroceryComponent } from './add-grocery/add-grocery.component';
import { GroceryUpdateComponent } from './grocery-update/grocery-update.component';
import { GroceryDetailsComponent } from './grocery-details/grocery-details.component';
import { GroceryLoginComponent } from './grocery-login/grocery-login.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CartServiceComponent } from './cart-service/cart-service.component';

const routes: Routes = [
  {path: '', component: GroceryListComponent},
  {path: 'add-grocery', component: AddGroceryComponent},
  {path: 'update-grocery/:id', component: GroceryUpdateComponent},
  {path: 'details/:id', component: GroceryDetailsComponent},
  {path: 'login', component: GroceryLoginComponent},
  {path: 'cart', component:CartServiceComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', component: NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
