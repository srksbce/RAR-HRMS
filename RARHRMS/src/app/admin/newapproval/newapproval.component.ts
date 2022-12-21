import { Component, OnInit } from '@angular/core';
import { Inewapp } from './newappmodel';
import { NgForm ,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-newapproval',
  templateUrl: './newapproval.component.html',
  styleUrls: ['./newapproval.component.css']
})
export class NewapprovalComponent implements OnInit {

NEWAPPROVAL = {} as Inewapp;
  constructor() { }

  ngOnInit(): void {
  }

  newapproval(f: NgForm) {

  }


}
