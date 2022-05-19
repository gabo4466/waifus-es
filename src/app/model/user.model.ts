export class UserModel {
  public _email:String;
  public _password:String;
  public _nickname:String;
  public _name:String;
  public _repPass:String;
  public _birthday:String;
  public _adultContent:boolean;
  public _terms:boolean;
  public _date:Date;

  constructor() {
    this._email = "";
    this._password = "";
    this._nickname = "";
    this._name = "";
    this._repPass = "";
    this._date = new Date(0);
    this._adultContent = false;
    this._terms = false;
    this._birthday = "";
  }
}
