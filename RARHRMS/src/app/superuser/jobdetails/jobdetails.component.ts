import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IJobdetails } from './jobmodel';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  empdata = {} as any;
  constructor(
    private http: HttpService,
    private router:Router
    ) { }
  subscription!: Subscription;

  JOB = {} as IJobdetails;

  ngOnInit(): void {
    this.empdata = JSON.parse(localStorage.getItem("jobdata") || '{}')
    console.log(this.empdata)
  }

  Job(f: NgForm) {
    // var expirydate = moment(this.JOB.expirationdate);
    // var status;

    // var now = moment();

    // if (now > expirydate) {
    //   console.log("past")
    //   status = "Inactive"
    // } else {
    //   console.log("future")
    //   status = "Active"
    // }




    // this.JOB.employeeid = parseInt(this.empdata.employeeid)
    // this.JOB.status = status
    // console.log(this.JOB)


    this.subscription = this.http.postdata("Job", this.JOB).subscribe({
      next: (data: any) => {
        console.log(data)
        if(data.statuscode==200){
          alert("Data insertd Sucessfully")
          this.router.navigate(["/superuser/superuserinfo"])
        }
      },
      error: (reason: any) => {
        //console.log(reason);
        alert("Insertion of data is failed")
      }
    });
  }
  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }

  }



