import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  id:string | null = "";
  name:string = "";
  template:string = "";
  resumes:any;
  formdata:any;
  

  constructor(private api:ApiService, private cookie:CookieService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {  
      this.initialize();
      this.list();
  }

  initialize(){
    this.formdata =new FormGroup({
      id:new FormControl(this.id == "0" ? "" : this.id),
      userid:new FormControl(localStorage.getItem("userid")),
      name:new FormControl(this.name),
      template:new FormControl(this.template),
    });
  }

  list(){
    this.api.post("resume/list", {userid:localStorage.getItem("userid")}).subscribe((mydata:any)=>{
      this.resumes = mydata.data;
      console.log(this.resumes);
    });
  }

  edit(id:string):void{
    this.id = id;
    this.api.post("resume/get", {id:this.id}).subscribe((mydata:any)=>{
        this.id = mydata.data._id;
        this.name = mydata.data.name;
        this.template = mydata.data.template;        
        this.initialize();
      });
  }

  delete(id:string):void{
    if(confirm("Sure to delete?")){
      let data = {id:id};
      this.api.post("resume/delete", {id}).subscribe((mydata)=>{
        this.list();
      });
    }
  }

  submit(formdata:any)
  {
    console.log(formdata);
    
    this.api.post("resume/save", formdata).subscribe((mydata)=>{
      alert("data add")
      this.id = "";
      this.name = "";
      this.template = "";
      this.initialize();
      this.list();
    });
  }

}
