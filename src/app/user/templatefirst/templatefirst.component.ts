import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-templatefirst',
  templateUrl: './templatefirst.component.html',
  styleUrls: ['./templatefirst.component.css']
})
export class TemplatefirstComponent implements OnInit {
  users:any

  constructor(private api:ApiService, private cookie:CookieService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }
    
  



}
