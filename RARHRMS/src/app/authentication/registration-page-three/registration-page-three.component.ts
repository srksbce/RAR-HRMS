import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { IREGISTRATIONPAGETHREE } from './registration-page3-model';

@Component({
  selector: 'app-registration-page-three',
  templateUrl: './registration-page-three.component.html',
  styleUrls: ['./registration-page-three.component.css']
})
export class RegistrationPageThreeComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  SECURITY= {} as   IREGISTRATIONPAGETHREE;
  constructor() { }

  ngOnInit(): void {
  }
  security(f:NgForm){
    
  }
}
