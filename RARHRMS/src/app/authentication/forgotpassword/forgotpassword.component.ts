
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Iemail } from '../register-model';






@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})



export class ForgotpasswordComponent implements OnInit {
  Forgotpassword = { } as Iemail;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  subscription!: Subscription;
  

  constructor(private _httpservice:HttpService,
    private router:Router,) { }
  ngOnInit(): void {
    
  }
  register(f:NgForm){ 
    this.subscription = this._httpservice.postdata("forgotpassword", this.Forgotpassword).subscribe({
    next: (data: any) => {
      
      if(data.status == "success" && data.statuscode == 200){
        console.log(data);
        localStorage.setItem("forgotpassword",JSON.stringify(data) );
     
        this.router.navigate(["/securityquestions"])
      }
      else {
        alert(data.message);
      }
    },
    error: reason => {
      console.log(reason);
    }
  });

  }
  }
  



