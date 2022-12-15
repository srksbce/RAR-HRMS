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
    this.newitems.push(this.inputvalue);
  }
  constructor() { }

  ngOnInit(): void {
    this.newitems =[ "Extended", "Failed", "Passed", "OutStanding" ];
  }

}
