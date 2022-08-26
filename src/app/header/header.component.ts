import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usertype = "";

  constructor() {
    this.usertype = localStorage.getItem("usertype") || "";
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    window.location.href = '/';
  }

}
