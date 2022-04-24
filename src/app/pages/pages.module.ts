import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";

import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfileComponent} from "./profile/profile.component";
import {PagesComponent} from "./pages.component";
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    PagesComponent,
  ],
  exports: [
    DashboardComponent,
    ProfileComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ]
})
export class PagesModule { }
