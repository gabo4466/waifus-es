import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from "./pages/pages.module";
import {AuthModule} from "./auth/auth.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import {HttpInterceptorService} from "./services/http-interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule
  ],
  providers:[
    {provide:HTTP_INTERCEPTORS, useClass:HttpInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
