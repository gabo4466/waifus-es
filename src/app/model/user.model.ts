export class UserModel {
  public _email:String;
  public _password:String;
  public _nickname:String;
  public _name:String;
  public _repPass:String;
  public _birthday:Date;
  public _adultContent:boolean;
  public _terms:boolean;

  constructor() {
    this._email = "";
    this._password = "";
    this._nickname = "";
    this._name = "";
    this._repPass = "";
    this._birthday = new Date(0);
    this._adultContent = false;
    this._terms = false;
  }
}
