import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ijobupdate } from './jobupadate-model';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-job-update',
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.css']
})
export class JobUpdateComponent implements OnInit,OnDestroy {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  jobupdate = { } as Ijobupdate;
  empdata = {} as any;
  constructor( private http: HttpService, private router:Router) { }
  subscription!: Subscription;
  ngOnInit(): void {
    this.empdata = JSON.parse(localStorage.getItem("personaldata") || '{}')
    console.log(this.empdata)
  }

  JOB(f:NgForm){
    this.jobupdate.employeeid = parseInt(this.empdata.employeeid)
  
    console.log(this.jobupdate)
 
   this.subscription=this.http.empPostData("empdata/",this.jobupdate, parseInt(this.empdata.id)).subscribe({
     next: (data: any) => {
       console.log(data)
       if(data.statuscode==200){
         alert(data.message)
         this.router.navigate(["/admin/jobtab"])
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

