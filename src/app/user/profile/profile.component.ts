import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formdata: any;
  id: any;
  name: string = "";
  email: string = "";
  mobileno: number = 0;

  constructor(private http: HttpClient, private route: ActivatedRoute,  private router:Router,private api:ApiService) { }

  ngOnInit(): void {


    this.id = localStorage.getItem("userid");
    if (this.id != 0) {
      this.api.post("user/get" ,{id:this.id}).subscribe((responce:any)=>{
        console.log(responce)
        this.name = responce.data.name;
        this.email= responce.data.email;
        this.mobileno = responce.data.mobileno;
        this.list();
      })
    }
   this,this.list();
  }




  list() {


    this.formdata = new FormGroup({
      // id:new FormControl(this.id=="0"?"":this.id),
      id:new FormControl(this.id),

      name: new FormControl(this.name),
      email: new FormControl(this.email),
      mobileno: new FormControl(this.mobileno),
      // password: new FormControl(""),
    })
  }

  submitdata(data:any){
    console.log(data);

   
    this.http.post(`http://localhost:8081/user/update/`, {data:data}).subscribe((data:any)=>{
        console.log(data);
        alert("dat UPDATED")
      } )
  //   this.http.post(`http://localhost:3000/posts/${this.id}`, data).subscribe((data:any)=>{
  //       console.log(data);
  //       alert("data updated")
    
  // } )
  // this.api.post("user/get" ,{}).subscribe((responce:any)=>{
  //   console.log(responce)
  //   alert("data upadate")
  // })
  
}
 }

