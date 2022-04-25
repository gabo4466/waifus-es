import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.css'
  ]
})
export class NavbarComponent {


  @Input() currentTheme: string = "darkTheme";
  @Output() themeOutput: EventEmitter<string>;

  constructor() {
    this.themeOutput = new EventEmitter();

  }

  changeTheme(){
    if (this.currentTheme === "darkTheme"){
      this.themeOutput.emit("lightTheme");
    }else{
      this.themeOutput.emit("darkTheme");
    }
  }


}
