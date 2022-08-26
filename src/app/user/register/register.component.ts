import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formdata: any;
  message = "";
  
  constructor(private api:ApiService, private router: Router) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.compose([Validators.required, Validators.email])),
      mobileno: new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      password: new FormControl("", Validators.required),
      cpassword: new FormControl("", Validators.required)
    })
  }

  submit(formdata: any) {
    this.api.post("user/register", formdata).subscribe((result: any) => {
      if(result.status == "success")
      {
        localStorage.setItem("usertype", "user");
        localStorage.setItem("userid", result.data._id);
        localStorage.setItem("name", result.data.name);
        localStorage.setItem("email", result.data.email);
        window.location.href = '/user';
      }
      else{
        this.message = "Email already registered.";
      }
    });
  }
}