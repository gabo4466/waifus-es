import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  public theme: string = 'lightTheme';

  constructor() { }

  ngOnInit(): void {
  }

  themeChanged(value: string){
    this.theme = value;
  }

}
