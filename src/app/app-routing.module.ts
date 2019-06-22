import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { jokesComponent } from './jokes/jokes.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AuthGuard } from './services/authservice/auth-guard.service';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminManageComponent } from './admin/admin-manage/admin-manage.component';
import { jokeFormComponent } from './admin/joke-form/joke-form.component';
import { AdminjokesComponent } from './admin/admin-jokes/admin-jokes.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminAuthGuard } from './services/authservice/admin-auth-guard.service';

const routes: Routes = [
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  
  { path: '', component: jokesComponent, canActivate:[AuthGuard]},
  { path: 'check-out', component: CheckOutComponent, canActivate:[AuthGuard]},
  { path: 'order-success', component: OrderSuccessComponent, canActivate:[AuthGuard]},
  { path: 'my/orders', component: MyOrdersComponent, canActivate:[AuthGuard]},

  { path: 'admin', component: AdminManageComponent, canActivate:[AuthGuard, AdminAuthGuard], children: [
    { path: 'jokes/new', component: jokeFormComponent,},
    { path: 'jokes/:id', component: jokeFormComponent, },
    { path: 'jokes', component: AdminjokesComponent,},
    { path: 'orders', component: AdminOrdersComponent, },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
