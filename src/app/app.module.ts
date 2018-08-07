import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {RouterModule , Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { Login2Component } from './login2/login2.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginformComponent
  },
  {

  path: 'dashboard',
  canActivate: [AuthguardGuard],
  component: DashboardComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LoginformComponent,
    FooterComponent,
    DashboardComponent,
    Login2Component
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
