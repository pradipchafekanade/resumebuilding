import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  formdata:any;
  year:any;
  college:any;
  percentage:any;
  educations:any

  constructor() { }

  ngOnInit(): void {
  }
  submit(formdata:any){
    let data = {data:formdata};
    this.year
    this.college
    this.percentage
  }

}
