import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IPassword } from '../register-model';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  passwordFormControl =new FormControl('',[Validators.required])
  Password = {} as IPassword;
  show=false as boolean;
  userData={} as any;
  subscription!: Subscription;

  constructor(private http: HttpService,
    private router: Router) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem("forgotpassword") || '{}')
    console.log(this.userData)

  }
  submit(f:NgForm){
    console.log(this.Password)
    this.subscription = this.http.empPostData('resetpassword/', this.Password, this.userData.mailid).subscribe({
      next: (data: any) => {
         console.log(data)
         if (data) {
          if (data.status == "success" && data.statuscode == 200){
            alert("Password changed successfully");
            this.router.navigate(["/"]);
            
          }
          else {
            alert("Password and ConfirmPassword should be same.");
          }
         
      }
    }
    })
  
  }

  handleConfirmPassword(value:any){
    console.log(value)
    if(this.Password.confirmPassword){
      if(this.Password.password!= this.Password.confirmPassword){
       this.show=true
      }
      else{
        this.show=false
      }
    }
  }
  
  


}
