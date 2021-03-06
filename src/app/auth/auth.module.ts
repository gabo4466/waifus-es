import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule} from "@angular/forms";

import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import { AuthComponent } from './auth.component';
import { OtpAuthComponent } from './otp-auth/otp-auth.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    OtpAuthComponent,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
