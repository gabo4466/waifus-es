import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../../common/constants";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-otp-auth',
  templateUrl: './otp-auth.component.html',
  styleUrls: ['./otp-auth.component.css']
})
export class OtpAuthComponent implements OnInit {

  //public otp:string;
  private url:string = Constants.apiURL;

  constructor( private http: HttpClient,
               private route: ActivatedRoute) {
    this.url += "activationOTP";

  }

  ngOnInit(): void {
    let param = new HttpParams();
    this.route.params.subscribe((params: Params) => param.set('idUser', params['id']));
    this.http.get(this.url, { params : param });
  }

}
