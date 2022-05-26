import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {UserModel} from "../../model/user.model";
import {Constants} from "../../common/constants";
import Swal from "sweetalert2";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private url = Constants.apiURL;
  public user:UserModel;
  constructor( private http: HttpClient,
               public router: Router) {
    this.user = new UserModel();
    this.url += "login";
  }

  ngOnInit(): void {

  }

  logInUser(form : NgForm){
    console.log(form);

    if (form.valid){
      this.http.post<Object>(this.url, JSON.stringify(this.user).replace(/[/_/]/g, ''), {observe: 'response'}).subscribe( (resp:any) => {
        if (resp.status){
          localStorage.setItem("access", resp.body['access']);
          this.router.navigate(['/forum']);
        }else if (resp.status === 202){

        }

      }, (resp:HttpErrorResponse) => {
        Swal.fire({
          title:`${resp.error['message']}`,
          html: ``,
          icon: "error",
          confirmButtonText: 'Ok'
        });
      });
    }
  }

}
