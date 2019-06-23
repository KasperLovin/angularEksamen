import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { jokesComponent } from './jokes/jokes.component';
import { AuthGuard } from './services/authservice/auth-guard.service';
import { AdminManageComponent } from './admin/admin-manage/admin-manage.component';
import { jokeFormComponent } from './admin/joke-form/joke-form.component';
import { AdminjokesComponent } from './admin/admin-jokes/admin-jokes.component';
import { AdminAuthGuard } from './services/authservice/admin-auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  
  { path: '', component: jokesComponent, canActivate:[AuthGuard]},

  { path: 'admin', component: AdminManageComponent, canActivate:[AuthGuard, AdminAuthGuard], children: [
    { path: 'jokes/new', component: jokeFormComponent,},
    { path: 'jokes/:id', component: jokeFormComponent, },
    { path: 'jokes', component: AdminjokesComponent,},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
