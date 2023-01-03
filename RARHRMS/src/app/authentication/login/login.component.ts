import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ILogin } from '../register-model';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  Login = {} as ILogin;
  subscription!: Subscription;
 urllink:string = "assets/profile-img.jpg";
 selectFiles(event:any){
  if(event.target.files){
    var reader= new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event:any) =>{
      this.urllink = event.target.result
    }
  }
 }
  entities= [] as any;
  visible:boolean = false;
  changetype:boolean =true;
 
  constructor(private _httpservice:HttpService,
    private router:Router,
   
    ) { }
   
  ngOnInit(): void {
    this.getentities();
    

  }
  

 
  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
  
 


  login(f: NgForm) {
         console.log(this.Login);
         this.subscription=this._httpservice.logindata("login",this.Login).subscribe({
          next: (data:any) => {
          if(data.status == "success" && data.statuscode == 200){
            console.log(data);
            localStorage.setItem("logindetails",JSON.stringify(data.logindetails) );
            localStorage.setItem("loginedIn", data.loginedIn);
            this.router.navigate(["/admin/launchpage"])
          }
          else{
            alert(data.message)
          }

          },
          error:reason=>console.log(reason)
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
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
    
    
    
  }
}
