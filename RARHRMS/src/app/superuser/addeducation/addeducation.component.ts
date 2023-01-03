import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IEducationUpdate } from './addeducation-model';

@Component({
  selector: 'app-addeducation',
  templateUrl: './addeducation.component.html',
  styleUrls: ['./addeducation.component.css']
})
export class AddeducationComponent implements OnInit {

  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  empdata = {} as any;
  constructor( private http: HttpService, private router:Router) { }
  subscription!: Subscription;
  educationupdate = {} as IEducationUpdate;
  ngOnInit(): void {
    this.empdata = JSON.parse(localStorage.getItem("personaldata") || '{}')
    console.log(this.empdata)
  }
  education(f:NgForm){
    this.educationupdate.employeeId = parseInt(this.empdata.employeeid)
  
   console.log(this.educationupdate)

  this.subscription=this.http.empPostData("Register/",this.educationupdate, parseInt(this.empdata.id)).subscribe({
    next: (data: any) => {
      console.log(data)
      if(data.statuscode==200){
        alert(data.message)
        this.router.navigate(["/superuser/superuserinfo"])
      }
    },
    error: (reason: any) => {
      console.log(reason);
    }
  });
}
ngOnDestroy(): void {
  if(this.subscription)
  this.subscription.unsubscribe();
 }

}
