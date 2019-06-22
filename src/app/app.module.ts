import { jokeservice } from './services/joke.service';
import { CategoryService } from './services/category.service';
import { AdminAuthGuard as AdminAuthGuard } from './services/authservice/admin-auth-guard.service';
import { AuthGuard as AuthGuard } from './services/authservice/auth-guard.service';
import { AuthService } from './services/auth.service';
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
import { jokesComponent } from './jokes/jokes.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminjokesComponent } from './admin/admin-jokes/admin-jokes.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { jokeFormComponent } from './admin/joke-form/joke-form.component';
import { jokeFilterComponent } from './jokes/joke-filter/joke-filter.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { IAppState } from './interfaces';
import { initialState } from './store';
import { reducer } from './redux/reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AdminManageComponent } from './admin/admin-manage/admin-manage.component';
import { SearchPipe } from './custompipe/search.pipe';
//import { IAppState, rootReducer } from './store';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    jokesComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminjokesComponent,
    AdminOrdersComponent,
    LoginComponent,
    jokeFormComponent,
    jokeFilterComponent,
    AdminManageComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    NgReduxModule, //NgReduxRouterModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule, MatInputModule, MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([])
  ],
  providers: [
    AuthService,
    ShoppingCartService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    CategoryService,
    jokeservice
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