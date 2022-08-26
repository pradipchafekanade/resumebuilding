import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  showtable_data:any;
  constructor(private http: HttpClient, private api:ApiService) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/posts").subscribe((data:any)=>{
        console.log(data);
        this.showtable_data = data;
  } )
  
 }
}