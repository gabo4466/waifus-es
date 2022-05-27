import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  patternCheck(regex: RegExp, control : string): boolean{
    return regex.test(control);
  }

  passwordCheck(password : string, passRep : string): boolean{
    let result : boolean;
    result = password === passRep;
    return result;
  }
}
