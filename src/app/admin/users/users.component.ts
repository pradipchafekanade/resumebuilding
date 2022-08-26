import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.post("user/list", {}).subscribe((result:any)=>{
      this.users = result.data;
      console.log(this.users);
    })
  }

}
