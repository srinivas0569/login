import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {RouterModule , Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';

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
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
