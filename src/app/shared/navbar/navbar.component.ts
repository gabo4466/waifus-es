import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.css'
  ]
})
export class NavbarComponent {

  public navBarColor: string = "pink";
  @Input() currentTheme: string = "darkTheme";
  @Output() themeOutput: EventEmitter<string>;

  constructor() {
    this.themeOutput = new EventEmitter();

  }

  changeTheme(){

    if (this.currentTheme === "darkTheme"){
      this.themeOutput.emit("mat-app-background");
      this.navBarColor = "cherry";
    }else if (this.currentTheme === "mat-app-background"){
      this.navBarColor = "pink";
      this.themeOutput.emit("lightTheme");
    }else{
      this.themeOutput.emit("darkTheme");

    }
  }


}
