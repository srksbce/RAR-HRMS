import { Component, OnInit } from '@angular/core';
import { NgForm ,FormControl,Validators} from '@angular/forms';
import { Icustomaccess } from './custom-model';

@Component({
  selector: 'app-custom-access',
  templateUrl: './custom-access.component.html',
  styleUrls: ['./custom-access.component.css']
})
export class CustomAccessComponent implements OnInit {
 
  CUSTOMACCESS = {} as Icustomaccess;
  constructor() { }

  ngOnInit(): void {
  }
  cusaccess(f: NgForm) {

  }

}
