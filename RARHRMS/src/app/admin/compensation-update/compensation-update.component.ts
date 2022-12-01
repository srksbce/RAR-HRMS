import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Icompensation } from './compensation-model';

@Component({
  selector: 'app-compensation-update',
  templateUrl: './compensation-update.component.html',
  styleUrls: ['./compensation-update.component.css']
})
export class CompensationUpdateComponent implements OnInit,OnDestroy {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  compensation = { } as  Icompensation ;
  empdata = {} as any;
  subscription!: Subscription;
  constructor(private http: HttpService, private router:Router) { }
  

  ngOnInit(): void {
  this.empdata = JSON.parse(localStorage.getItem("personaldata") || '{}')
  console.log(this.empdata)
  }

 Compen(f:NgForm){
    this.compensation.employeeid = parseInt(this.empdata.employeeid)

    console.log(this.compensation)
    this.subscription=this.http.empPostData("empdata/",this.compensation, parseInt(this.empdata.id)).subscribe({
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
