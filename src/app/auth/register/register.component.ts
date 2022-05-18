import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../../model/user.model";
import {Constants} from "../../common/constants";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private url = Constants.apiURL;
  public user:UserModel;
  constructor( private http: HttpClient ) {
    this.user = new UserModel();
    this.url += "register";
  }

  ngOnInit(): void {
  }

  formatDateee(date:Date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('');
  }

  registerUser(form : NgForm){
    console.log(this.formatDateee(this.user._birthday));
    this.http.post<Object>(this.url, JSON.stringify(this.user).replace(/[/_/]/g, '')).subscribe( (resp:any) => {
      console.log(resp);
    } );
  }

}
