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
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.NEWEMP = this.emailFormControl({
    // EmailId: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    // })
    //this.clientdata();
    this.emp();
  }
  img: string = "assets/profile-img.jpg";
  selectFiles(event: any) {
    if (event.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.NEWEMP.img = event.target.result
      }
    }
  }
  dobvalid(value: any) {

    console.log(value)

    var age = moment(moment.now()).diff(value, "years");
    console.log(age)

    if (age >= 18 && age <= 75) {
      this.show = false
    } else {
      this.show = true
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
    this.subscription = this.http.getData("Register").subscribe({
      next: (data: any) => {
        this.empdetails = data as any[];
        console.log(this.empdetails)
      },
      error: reason => console.log(reason)
    });
  }

  employee(f: NgForm) {
   
    this.empdata = {
      "employeeId": this.NEWEMP.employeeId,
      "firstName": this.NEWEMP.firstName,
      "lastName": this.NEWEMP.lastName,
      "maritalStatus": this.NEWEMP.maritalStatus,
      "empstatus": this.NEWEMP.empstatus,
      "emailaddress": this.NEWEMP.emailaddress,
      "jobtitle": this.NEWEMP.jobRole,
      "internalstaff": this.NEWEMP.internalstaff,
      "supervisor": this.NEWEMP.supervisor,
      "visaStatus": this.NEWEMP.visaStatus,
      "gender": this.NEWEMP.gender,
      "entity": this.NEWEMP.entity,
      "dob": this.NEWEMP.dob,
      "clientName": this.NEWEMP.clientName,
      "clientcode": this.NEWEMP.clientcode,
      "startdate": this.NEWEMP.startdate,
      "createdby": this.NEWEMP.createdby,
      "updatedby": this.NEWEMP.updatedby,
      "immigrationstatus": this.NEWEMP.immigrationstatus,
      "university": this.NEWEMP.university,
      "contactnumber": this.NEWEMP.contactnumber,
      "addressLine1": this.NEWEMP.addressLine1,
      "addressLine2": this.NEWEMP.addressLine2,
      "city": this.NEWEMP.city,
      "state": this.NEWEMP.state,
      "zipCode": this.NEWEMP.zipCode,
      "country": this.NEWEMP.country,
      "ssn": this.NEWEMP.ssn,
      "taxFileNumber": this.NEWEMP.taxFileNumber,
      "emergencynumber": this.NEWEMP.emergencynumber,
      "effectivedate": this.NEWEMP.effectivedate,
      "location": this.NEWEMP.location,
      "reportingTo": this.NEWEMP.reportingTo,
      "payschedule": this.NEWEMP.payschedule,
      "payType": this.NEWEMP.payType,
      "payrate": this.NEWEMP.payrate,
      "overtimeEligibility": this.NEWEMP.overtimeEligibility,
      "overtimerate": this.NEWEMP.overtimerate,
      "reason": this.NEWEMP.reason,
      "comments": this.NEWEMP.comments,
      "specialization": this.NEWEMP.specialization,
      "gpa": this.NEWEMP.gpa,
      "educationstartdate": this.NEWEMP.educationstartdate,
      "educationenddate": this.NEWEMP.educationenddate,
      "visaTypeIssuingCountry": this.NEWEMP.visaTypeIssuingCountry,
      "issuedDate": this.NEWEMP.issuedDate,
      "expirationdate": this.NEWEMP.expirationdate,
      "status": this.NEWEMP.status,
      "employementstatus": this.NEWEMP.employementstatus,
      "jobEffectiveDate": this.NEWEMP.jobEffectiveDate,
      "compensationEffectiveDate": this.NEWEMP.compensationEffectiveDate,
      "title": this.NEWEMP.title,
      "nationalId": this.NEWEMP.nationalId,
      "profilePic": this.NEWEMP.profilePic,
      "secondaryLanguage": this.NEWEMP.secondaryLanguage,
      "addressId": this.NEWEMP.addressId,
      "workPhone": this.NEWEMP.workPhone,
      "mobilePhone": this.NEWEMP.mobilePhone,
      "workEmail": this.NEWEMP.workEmail,
      "homeEmail": this.NEWEMP.homeEmail,
      "degree": this.NEWEMP.degree,
      "notes": this.NEWEMP.notes,
      "bankName": this.NEWEMP.bankName,
      "accountNumber": this.NEWEMP.accountNumber,
      "userName": this.NEWEMP.userName,
      "password": this.NEWEMP.password,
      "confirmPassword": this.NEWEMP.confirmPassword,
      "ifscCode": this.NEWEMP.ifscCode,
      "proof": this.NEWEMP.proof,
      "dateOfJoining": this.NEWEMP.dateOfJoining,
      "probationEndDate": this.NEWEMP.probationEndDate,
      "probationStatus": this.NEWEMP.probationStatus,
      "noticePeriod": this.NEWEMP.noticePeriod,
      "backgroundCheckStatus": this.NEWEMP.backgroundCheckStatus,
      "department": this.NEWEMP.department,
      "businessArea": this.NEWEMP.businessArea,
      "compensationComments": this.NEWEMP.compensationComments,
      "frequency": this.NEWEMP.frequency,
      "amount": this.NEWEMP.amount,
      "emergencyName": this.NEWEMP.emergencyName,
      "relationShip": this.NEWEMP.relationShip,
      "emailId": this.NEWEMP.emailId,
      "mobileNumber": this.NEWEMP.mobileNumber,
      "projectName": this.NEWEMP.projectName,
      "projectStartDate": this.NEWEMP.projectStartDate,
      "projectEndDate": this.NEWEMP.projectEndDate,
      "termtypeoffboard": this.NEWEMP.termtypeoffboard,
      "termreasonoffboard": this.NEWEMP.termreasonoffboard,
      "eligibleforrehire": this.NEWEMP.eligibleforrehire,
      "lastworkingday": this.NEWEMP.lastworkingday,
      "jobRole": this.NEWEMP.jobRole,
      "img": this.NEWEMP.img

    }

    console.log(this.empdata)


    this.subscription = this.http.postdata("Register", this.empdata).subscribe({
      next: (data: any) => {
        console.log(data)
        if (data.statuscode == 200) {
          alert("Data Saved Successfully")
          //this.router.navigate(["/admin/activeemployeedata"])
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


