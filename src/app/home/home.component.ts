import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formdata: any;
  message = "";
  
  constructor(private api:ApiService, private router: Router) { }

  ngOnInit(): void {

    if(localStorage.getItem("usertype") != null)
      window.location.href = '/' + localStorage.getItem("usertype");

    this.formdata = new FormGroup({
      email: new FormControl("", Validators.compose([Validators.required, Validators.email])),
      password: new FormControl("", Validators.required)
    })
  }

  submit(formdata: any) {
    console.log(formdata);
    this.api.post("user/login", formdata).subscribe((result: any) => {
      console.log(result);
      if(result.data.status == "success")
      {
        localStorage.setItem("usertype", result.data.usertype);
        if(result.data.usertype === "admin"){
          window.location.href = '/admin';
        }
        else        {
          localStorage.setItem("userid", result.data.data._id);
          localStorage.setItem("name", result.data.data.name);
          localStorage.setItem("email", result.data.data.email);
          window.location.href = '/user';
        }
          
      }
      else{
        this.message = result.data.message;
      }
    });
  }
}