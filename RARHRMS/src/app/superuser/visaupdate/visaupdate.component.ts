import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Ivisaupdate } from './visa-model';

@Component({
  selector: 'app-visaupdate',
  templateUrl: './visaupdate.component.html',
  styleUrls: ['./visaupdate.component.css']
})
export class VisaupdateComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  empdata = {} as any;
  constructor(
    private http: HttpService,
    private router:Router
    ) { }
  subscription!: Subscription;

  VISA = {} as Ivisaupdate;
  visa =[] as any;
  
  ngOnInit(): void {
    this.empdata = JSON.parse(localStorage.getItem("personaldata") || '{}')
    console.log(this.empdata)
    this.getvisadata();
  }

  visaupdate(f: NgForm) {
    var expirydate = moment(this.VISA.expirationdate);
    var status;

    var now = moment();

    if (now > expirydate) {
      console.log("past")
      status = "Inactive"
    } else {
      console.log("future")
      status = "Active"
    }




    this.VISA.employeeid = parseInt(this.empdata.employeeid)
    this.VISA.status = status
    console.log(this.VISA)


    this.subscription = this.http.postdata("Visa", this.VISA).subscribe({
      next: (data: any) => {
        console.log(data)
        if(data.statuscode==200){
          alert("Data insertd Sucessfully")
          this.router.navigate(["/superuser/superuserinfo"])
        }
      },
      error: (reason: any) => {
        alert("Insertion of data is failed")
      }
    });
  }

  getvisadata(){
    this.subscription=this.http.getData("Visatype").subscribe({
      next: data  => {
          this.visa=data
      }
    })
    console.log(this.visa)
  }
  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }



}

