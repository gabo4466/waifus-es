import {Component, OnInit} from '@angular/core';
import {FormBuilder, NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../../model/user.model";
import {Constants} from "../../common/constants";
import {ValidatorsService} from "../../services/validators.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private url = Constants.apiURL;
  public user:UserModel;
  public passwordMatch:boolean;
  public passwordCheck:boolean;
  public nicknameCheck:boolean;
  public fb:FormBuilder;
  constructor( private http: HttpClient,
               private validator: ValidatorsService) {
    this.user = new UserModel();
    this.url += "register";
    this.passwordMatch = true;
    this.passwordCheck = true;
    this.nicknameCheck = true;
    this.fb = new FormBuilder();
  }

  ngOnInit(): void {
  }

  formatDateYYYYMMDD(date:Date) {
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

    if(this.validator.passwordCheck(this.user._password, this.user._repPass)){
      this.passwordMatch = true;
    }else{
      this.passwordMatch = false;
    }

    if(this.validator.patternCheck(/[A-Za-z\d]/, this.user._password)){
      this.passwordCheck = true;
    }else {
      this.passwordCheck = false;
    }

    if(this.validator.patternCheck(/[A-Za-z\d\s]/, this.user._nickname)){
      this.nicknameCheck = true;
    }else {
      this.nicknameCheck = false;
    }

    if (form.valid && this.passwordMatch && this.passwordCheck && this.nicknameCheck){
      this.user._birthday = this.formatDateYYYYMMDD(this.user._date);
      this.http.post<Object>(this.url, JSON.stringify(this.user).replace(/[/_/]/g, '')).subscribe( (resp:any) => {
        console.log(resp);
      } );
    }
  }

}
