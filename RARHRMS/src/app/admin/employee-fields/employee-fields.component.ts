import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-fields',
  templateUrl: './employee-fields.component.html',
  styleUrls: ['./employee-fields.component.css']
})
export class EmployeeFieldsComponent implements OnInit {
  newitems : string [] = [];
  inputvalue : string = "";
  Add(){
    if(this.inputvalue !=""){
      this.newitems.push(this.inputvalue);
      this.inputvalue="";
    }
    else{
      alert("please enter proper value")
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.newitems =[ "Extended", "Failed", "Passed", "OutStanding" ];
  }

}
