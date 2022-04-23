import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.css'
  ]
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let products = JSON.parse(xhr.responseText);
          alert(products.mierda);
        }
      }
    };
    xhr.open("POST", "http://localhost:8080/bestiario_war_exploded/hello-servlet", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();

  }
}
