import { Component, OnInit } from '@angular/core';

import { EmailValidator, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { INewemp } from './newemp-model';

@Component({
  selector: 'app-newemp',
  templateUrl: './newemp.component.html',
  styleUrls: ['./newemp.component.css']
})
export class NewempComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  NEWEMP = {} as INewemp;
  empdata = {} as any;

  logid: any;
  client = [] as any;
  empdetails = [] as any;
  show = false as boolean;
  subscription!: Subscription;


  constructor(
    private http: HttpService,
    private router:Router    
    ) { }

  ngOnInit(): void {
    // this.NEWEMP = this.emailFormControl({
    // EmailId: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    // })
    this.clientdata();
    this.emp();
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

  clientdata() {
    this.subscription = this.http.getData("clientdata").subscribe({
      next: (data: any) => {
        this.client = data as any[];
        console.log(this.client)
      },
      error: reason => console.log(reason)
    });
  }

  emp() {
    this.subscription = this.http.getData("empdata").subscribe({
      next: (data: any) => {
        this.empdetails = data as any[];
        console.log(this.empdetails)
      },
      error: reason => console.log(reason)
    });
  }

  employee(f: NgForm) {

    this.empdata = {
      "employeeid": this.NEWEMP.employeeid,
      "firstname": this.NEWEMP.firstname,
      "lastname": this.NEWEMP.lastname,
      "fullname": this.NEWEMP.firstname + " " + this.NEWEMP.lastname,
      "empstatus": this.NEWEMP.empstatus,
      "emailaddress": this.NEWEMP.emailaddress,
      "jobtitle": this.NEWEMP.jobtitle,
      "internalstaff": " ",
      "supervisor": this.NEWEMP.supervisor,
      "visastatus": "NA",
      "gender": this.NEWEMP.gender,
      "entity": "NA",
      "dateofbirth": this.NEWEMP.dateofbirth,
      "clientname": this.NEWEMP.clientname,
      "clientcode": "NA",
      "startdate": this.NEWEMP.startdate,
      "createdby": "",
      "updatedby": "NA",
      "immigrationstatus": "NA",
      "highestdegree": "NA",
      "university": "NA",
      "contactnumber": this.NEWEMP.contactnumber,
      "addressline1": this.NEWEMP.addressline1,
      "addressline2": this.NEWEMP.addressline2,
      "city": this.NEWEMP.city,
      "state": this.NEWEMP.state,
      "zipcode": this.NEWEMP.zipcode,
      "country": this.NEWEMP.country,
      "ssn": this.NEWEMP.ssn,
      "taxfilenumber": 0,
      "emergencynumber": 0,
      "effectivedate": "NA",
      "location": "NA",
      "reportsto": "NA",
      "payschedule": this.NEWEMP.payschedule,
      "paytype": this.NEWEMP.paytype,
      "payrate": this.NEWEMP.payrate,
      "overtime": "NA",
      "overtimerate": "NA",
      "changereason": "NA",
      "comment": "NA",
      "specialization": "NA",
      "gpa": "NA",
      "degreestartdate": "NA",
      "degreeenddate": "NA",
      "date": "NA",
      "issuingcountry": "NA",
      "issueddate": "NA",
      "expirationdate": "NA",
      "status": "NA",
      "employementstatus": this.NEWEMP.employementstatus,
      "jobeffectivedate": "",
      "compensationeffectivedate": "NA"


    }

    console.log(this.empdata)


    this.subscription = this.http.postdata("empdata", this.empdata).subscribe({
      next: (data: any) => {
        console.log(data)
        if(data.statuscode==200){
         alert("Data Saved Successfully")
         this.router.navigate(["/admin/activeemployeedata"])
        }
      },
      error: reason => console.log(reason)
    });
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
}


