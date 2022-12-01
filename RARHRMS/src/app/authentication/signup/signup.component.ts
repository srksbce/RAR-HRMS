import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Isignup } from '../register-model';
import * as moment from 'moment';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  Signup = {} as Isignup;
  show = false as boolean;

  constructor(private _httpservice: HttpService,
  private router: Router,) { }
  subscription!: Subscription;


  ngOnInit(): void {
  }



    dobvalid(value:any) {


    console.log(value)
    

   var age = moment(moment.now()).diff(value, "years");
   console.log(age)

    if (age >= 18 && age <= 75) {

      this.show = false

    } else {

      this.show= true

    }
  }



  register(f: NgForm) {

  }
}
