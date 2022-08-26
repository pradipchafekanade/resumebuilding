import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {

  id:string | null = "";
  title:string = "";
  objectives:any;
  formdata:any;

  constructor(private api:ApiService, private cookie:CookieService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.list();
    this.initialize();
  }

  initialize(){
    this.formdata =new FormGroup({
      id:new FormControl(this.id == "0" ? "" : this.id),
      title:new FormControl(this.title, Validators.compose([Validators.required]))
    });
  }

  list(){
    this.api.post("objective/list", {}).subscribe((mydata:any)=>{
      this.objectives = mydata.data;
      console.log(this.objectives);
    });
  }

  edit(id:string):void{
    this.id = id;
    this.api.post("objective/get", {id:this.id}).subscribe((mydata:any)=>{
        this.id = mydata.data._id;
        this.title = mydata.data.title;
        this.initialize();
      });
  }

  delete(id:string):void{
    if(confirm("Sure to delete?")){
      let data = {id:id};
      this.api.post("objective/delete", {id}).subscribe((mydata)=>{
        this.list();
      });
    }
  }

  submit(formdata:any)
  {
    this.api.post("objective/save", formdata).subscribe((mydata)=>{
      this.id = "";
      this.title = "";
      this.initialize();
      this.list();
    });
  }

}
