import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthComponent} from "./auth.component";
import {OtpAuthComponent} from "./otp-auth/otp-auth.component";

const routes: Routes = [

  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'code/:id', component: OtpAuthComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }

