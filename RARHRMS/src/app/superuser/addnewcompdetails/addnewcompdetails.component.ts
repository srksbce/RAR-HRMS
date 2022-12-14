import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Icompdetails } from './compmodel';

@Component({
  selector: 'app-addnewcompdetails',
  templateUrl: './addnewcompdetails.component.html',
  styleUrls: ['./addnewcompdetails.component.css']
})
export class AddnewcompdetailsComponent implements OnInit {

  COMPDETAILS = {} as Icompdetails;

  constructor() { }

  ngOnInit(): void {
  }

newcomp(f:NgForm){
    
  }

}
