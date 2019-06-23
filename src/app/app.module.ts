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


import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { jokesComponent } from './jokes/jokes.component';
import { AdminjokesComponent } from './admin/admin-jokes/admin-jokes.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { jokeFormComponent } from './admin/joke-form/joke-form.component';
import { jokeFilterComponent } from './jokes/joke-filter/joke-filter.component';
import { IAppState } from './interfaces';
import { initialState } from './store';
import { reducer } from './redux/reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminManageComponent } from './admin/admin-manage/admin-manage.component';
import { SearchPipe } from './custompipe/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    jokesComponent,
    AdminjokesComponent,
    LoginComponent,
    jokeFormComponent,
    jokeFilterComponent,
    AdminManageComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([])
  ],
  providers: [
    AuthService,
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
    )
  {
    ngRedux.configureStore(reducer, initialState, [createLogger()]);  
  }
}