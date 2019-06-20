import { ProductPipe } from './product.pipe';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AdminAuthGuard as AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard as AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2'; 
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
//import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';


import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ShoppingCartService } from './shopping-cart.service';
import { IAppState } from './interfaces';
import { initialState } from './store';
import { reducer } from './redux/reducer';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material';
//import { IAppState, rootReducer } from './store';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductPipe,
    ProductFilterComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule, //NgReduxRouterModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      
      //{ path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'login', component: LoginComponent },
      
      { path: '', component: ProductsComponent, canActivate:[AuthGuard]},
      { path: 'check-out', component: CheckOutComponent, canActivate:[AuthGuard]},
      { path: 'order-success', component: OrderSuccessComponent, canActivate:[AuthGuard]},
      { path: 'my/orders', component: MyOrdersComponent, canActivate:[AuthGuard]},

      { path: 'admin/products/new', component: ProductFormComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'admin/products/:id', component: ProductFormComponent, canActivate:[AuthGuard, AdminAuthGuard] },
      { path: 'admin/products', component: AdminProductsComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate:[AuthGuard, AdminAuthGuard] },
    ])
  ],
  providers: [
    AuthService,
    ShoppingCartService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    CategoryService,
    ProductService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    ngRedux: NgRedux<IAppState>,
    //ngReduxRouter: NgReduxRouter,
    )
  {
    ngRedux.configureStore(reducer, initialState, [createLogger()]);  
  }
}