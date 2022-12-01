import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ijobtab } from './jobtab-model';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-tab',
  templateUrl: './job-tab.component.html',
  styleUrls: ['./job-tab.component.css']
})
export class JobTabComponent implements OnInit,OnDestroy {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  subscription!: Subscription;
  empdata ={} as any;
  JOBTAB= {} as Ijobtab;
  jobData=[] as any;
  compensationData=[] as any;

  constructor(private http:HttpService, private router:Router) {

   }
  

  ngOnInit(): void {
    
    this.empdata = JSON.parse(localStorage.getItem("personaldata") || '{}')
    console.log(this.empdata)

    this.getjobData();
    this.getcompensationData();
  }
  getjobData(){
    let sdata = {
      "employeeid": parseInt(this.empdata.employeeid)
    }
    console.log(sdata)
    this.subscription = this.http.postdata("getjobinformation", sdata).subscribe({
      next:(data:any)=>{
        console.log(data);
        this.jobData= data
      }
    })

  }
 JB(f:NgForm){
  
 }

  getcompensationData(){
    let sdata = {
      "employeeid": parseInt(this.empdata.employeeid)
    }
    console.log(sdata)
    this.subscription = this.http.postdata("getcompensation", sdata).subscribe({
      next:(data:any)=>{
        console.log(data);
        this.compensationData= data
      }
    })
  }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  

}
