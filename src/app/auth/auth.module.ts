import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "../app-routing.module";

import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import { AuthComponent } from './auth.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class AuthModule { }
