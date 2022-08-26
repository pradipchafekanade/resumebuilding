import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  usertype = "";

  constructor() {
    this.usertype = localStorage.getItem("usertype") || "";
  }

  ngOnInit(): void {
  }

}
