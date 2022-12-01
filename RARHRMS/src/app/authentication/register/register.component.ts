import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import { ISignup } from '../register-model';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name = 'Angular';
  private stepper!: Stepper;
  Signup = {} as ISignup;
  show = false as boolean;
  subscription!: Subscription;
  entities= [] as any;
  roles=[] as any
  constructor(private _httpservice:HttpService,
    private router:Router) { }

    validateuser()
    {
     

    }
   

  next() {
    // if(document.getElementById("firstName")== null){
        
    // }
    if(this.Signup.firstName == null || this.Signup.lastName== null || this.Signup.idnumber== null || this.Signup.email== null || this.Signup.phoneNumber== null || this.Signup.entity== null || this.Signup.dateofBirth== null || this.Signup.gender== null){
        alert("Fill up the required details. ")
    }
     else{
      
    this.stepper.next()
    
     }
    
  }
  NEXT(){
    if(this.Signup.address1 == null || this.Signup.address2== null || this.Signup.city== null || this.Signup.state== null || this.Signup.zipcode== null || this.Signup.country== null || this.Signup.password== null || this.Signup.confirmPassword== null|| this.Signup.role== null){
      alert("Fill up the required details. ")
  }
   else{
    
  this.stepper.next()
  
   }
  }

  onSubmit() {
    return false;
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
    console.log(this.Signup)
    this.Signup.status = "pending";
    this.Signup.phoneNumber=this.Signup.phoneNumber.toString();
    this.Signup.idnumber=this.Signup.idnumber.toString();
    this.Signup.zipcode=this.Signup.zipcode.toString();
    this.subscription = this._httpservice.postdata("reg", this.Signup).subscribe({
      next: (data: any) => {
        
        if(data.status == "success" && data.statuscode == 200){
          console.log(data);
          alert("Registered successfully  ")
       
          this.router.navigate(["/"])
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
  getentities(){
    this.subscription=this._httpservice.getData("orgndata").subscribe({
      next: data  => {
          this.entities=data
      }
    })
    console.log(this.entities)
  }
  getroles(){
    this.subscription=this._httpservice.getData("roles").subscribe({
      next: data  => {
          this.roles=data
      }
    })
    console.log(this.roles)
  }
 
  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1') as Element, {
      linear: false,
      animation: true
    });
    this.getentities();
    this.getroles();
  }
  
  handleConfirmPassword(value:any){
    console.log(value)
    if(this.Signup.confirmPassword){
      if(this.Signup.password!= this.Signup.confirmPassword){
       this.show=true
      }
      else{
        this.show=false
      }
    }
  }
}


