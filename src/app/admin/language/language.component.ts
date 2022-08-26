import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

 
  id:string | null = "";
  title:string = "";
  formdata:any;
  languages:any

  constructor(private api:ApiService, private cookie:CookieService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get("id");
    // if(this.id != "0")
    // {
    //   this.api.post("objective/get", {data:{id:this.id}}).subscribe((mydata:any)=>{
    //     this.id = mydata.data._id;
    //     this.title = mydata.data.title;
    //     this.initialize();
    //   })
    // }
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
    this.api.post("language/list", {}).subscribe((mydata:any)=>{
      this.languages = mydata.data;
      console.log(this.languages);
    });
  }

  edit(id:string):void{
    this.id = id;
    this.api.post("language/get", {id:this.id}).subscribe((mydata:any)=>{
        this.id = mydata.data._id;
        this.title = mydata.data.title;
        this.initialize();
      });
  }

  delete(id:string):void{
    if(confirm("Sure to delete?")){
      let data = {id:id};
      this.api.post("language/delete", {id}).subscribe((mydata)=>{
        this.list();
      });
    }
  }

  submit(formdata:any)
  {
    let data = {data:formdata};
    this.api.post("language/save", formdata).subscribe((mydata)=>{
      // this.router.navigate(["admin/objectives/0"]);
      this.id = "";
      this.title = "";
      this.initialize();
      this.list();
      //window.location.href = "admin/objectives/0";
    });
  }

}