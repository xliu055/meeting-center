import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showNavTop:boolean=false; 

  constructor() { }

  ngOnInit() {
  }

  OnNavTop()
  {
    this.showNavTop=!this.showNavTop;
  }

}
