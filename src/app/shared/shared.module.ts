import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {BreadcrumbsComponent} from "./breadcrumbs/breadcrumbs.component";



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BreadcrumbsComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
