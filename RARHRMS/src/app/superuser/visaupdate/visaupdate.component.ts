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

  ngOnInit(): void {
    this.empdata = JSON.parse(localStorage.getItem("personaldata") || '{}')
    console.log(this.empdata)
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


    this.subscription = this.http.empPostData("empdata/", this.VISA, parseInt(this.empdata.id)).subscribe({
      next: (data: any) => {
        console.log(data)
        if(data.statuscode==200){
          alert(data.message)
          this.router.navigate(["/admin/personaldata"])
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

