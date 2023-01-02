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
      "EmployeeId": this.NEWEMP.EmployeeId,
      "FirstName": this.NEWEMP.FirstName,
      "LastName": this.NEWEMP.LastName,
      "empstatus": this.NEWEMP.empstatus,
      "emailaddress": this.NEWEMP.emailaddress,
      "jobtitle": this.NEWEMP.jobtitle,
      "internalstaff": " ",
      "supervisor": this.NEWEMP.supervisor,
      "VisaStatus": "NA",
      "Gender": this.NEWEMP.Gender,
      "Entity": "NA",
      "DOB": this.NEWEMP.DOB,
      "ClientName": this.NEWEMP.ClientName,
      "clientcode": "NA",
      "startdate": this.NEWEMP.startdate,
      "createdby": "",
      "updatedby": "NA",
      "immigrationstatus": "NA",
      "highestdegree": "NA",
      "University": "NA",
      "contactnumber": this.NEWEMP.contactnumber,
      "AddressLine1": this.NEWEMP.AddressLine1,
      "AddressLine2": this.NEWEMP.AddressLine2,
      "City": this.NEWEMP.City,
      "State": this.NEWEMP.State,
      "ZipCode": this.NEWEMP.ZipCode,
      "Country": this.NEWEMP.Country,
      "ssn": this.NEWEMP.ssn,
      "TaxFileNumber": 0,
      "emergencynumber": 0,
      "effectivedate": "NA",
      "Location": "NA",
      "ReportingTo": "NA",
      "payschedule": this.NEWEMP.payschedule,
      "PayType": this.NEWEMP.PayType,
      "payrate": this.NEWEMP.payrate,
      "overtime": "NA",
      "overtimerate": "NA",
      "changeReason": "NA",
      "Comments": "NA",
      "Specialization": "NA",
      "Gpa": "NA",
      "Educationstartdate": "NA",
      "Educationenddate": "NA",
      "date": "NA",
      "VisaTypeIssuingCountry": "NA",
      "issuedDate": "NA",
      "expirationdate": "NA",
      "status": "NA",
      "employementstatus": this.NEWEMP.employementstatus,
      "JobEffectiveDate": "",
      "CompensationEffectiveDate": "NA",
      "Notes": String,

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
      error: Reason => console.log(Reason)
    });
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
}


