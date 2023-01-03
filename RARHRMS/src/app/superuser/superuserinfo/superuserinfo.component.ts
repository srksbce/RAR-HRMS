import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { Ipersonaldata } from 'src/app/admin/personaldata/personal-model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-superuserinfo',
  templateUrl: './superuserinfo.component.html',
  styleUrls: ['./superuserinfo.component.css']
})
export class SuperuserinfoComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  subscription !: Subscription;
  educationData = [] as any;

  visaData = [] as any;
  PERSONAL = {} as Ipersonaldata;

  empdata = [] as any;
 
  jobData=[] as any;
  compensationData=[] as any;
  BankData = [] as any;



  constructor( private http: HttpService,private router: Router ) { }


  ngOnInit(): void {
    //this.empdata = JSON.parse(localStorage.getItem("personaldata") || '{}')
    console.log(this.empdata);
    this.getEducationData();
    this.getvisainformation();

  }



  getEducationData() {
    let sdata = {
      "employeeId": parseInt(this.empdata.employeeid)
    }
    console.log(sdata)
    this.subscription = this.http.postdata("Register", sdata).subscribe({
      next: (data: any) => {
        console.log(data);
        this.educationData = data
      }
    })
  }
  getvisainformation() {
    let sdata = {
      "employeeid": parseInt(this.empdata.employeeid)
    }
    console.log(sdata)
    this.subscription = this.http.postdata("getvisainformation", sdata).subscribe({
      next: (data: any) => {
        console.log(data);
        this.visaData = data
      }
    })
  }
  personal(f: NgForm) {

  }
  personaltab() {
    console.log(this.empdata)
     let sdata = {
      "employeeId": this.empdata.employeeId,
        "firstName": this.empdata.firstName,
        "lastName": this.empdata.lastName,
        "maritalStatus":this.empdata.maritalStatus,
        "empstatus": this.empdata.empstatus,
        "emailaddress": this.empdata.emailaddress,
        "jobtitle": this.empdata.jobtitle,
        "internalstaff": this.empdata.internalstaff,
        "supervisor": this.empdata.supervisor,
        "visaStatus": this.empdata.visaStatus,
        "gender": this.empdata.gender,
        "entity": this.empdata.entity,
        "dob": this.empdata.dob,
        "clientName": this.empdata.clientName,
        "clientcode": this.empdata.clientcode,
        "startdate": this.empdata.startdate,
        "createdby": this.empdata.createdby,
        "updatedby": this.empdata.updatedby,
        "immigrationstatus": this.empdata.immigrationstatus,
        "highestdegree": this.empdata.highestdegree,
        "university": this.empdata.university,
        "contactnumber": this.empdata.contactnumber,
        "addressLine1": this.empdata.addressLine1,
        "addressLine2": this.empdata.addressLine2,
        "city": this.empdata.city,
        "state": this.empdata.state,
        "zipCode":this.empdata.zipCode,
        "country":this.empdata.country,
        "ssn": this.empdata.ssn,
        "taxFileNumber": this.empdata.taxFileNumber,
        "emergencynumber": this.empdata.emergencynumber,
        "effectivedate": this.empdata.effectivedate,
        "location": this.empdata.location,
        "reportingTo":this.empdata.reportingTo,
        "payschedule": this.empdata.payschedule,
        "payType": this.empdata.payType,
        "payrate":this.empdata.payrate,
        "overtimeEligibility": this.empdata.overtimeEligibility,
        "overtimerate": this.empdata.overtimerate,
        "reason": this.empdata.reason,
        "comments": this.empdata.comments,
        "specialization": this.empdata.specialization,
        "gpa": this.empdata.gpa,
        "educationstartdate": this.empdata.educationenddate,
        "educationenddate":this.empdata.educationenddate,
        "visaTypeIssuingCountry": this.empdata.visaTypeIssuingCountry,
        "issuedDate":this.empdata.issuedDate,
        "expirationdate":this.empdata.expirationdate,
        "status": this.empdata.status,
        "employementstatus": this.empdata.employementstatus,
        "jobEffectiveDate":this.empdata.jobEffectiveDate,
        "compensationEffectiveDate":this.empdata.compensationEffectiveDate,
        "id": this.empdata.id,
        "title":this.empdata.title,
        "nationalId": this.empdata.nationalId,
        "profilePic": this.empdata.profilePic,
        "secondaryLanguage":this.empdata.secondaryLanguage,
        "addressId": this.empdata.addressId,
        "workPhone":this.empdata.workPhone,
        "mobilePhone":this.empdata.mobilePhone,
        "workEmail": this.empdata.workEmail,
        "homeEmail": this.empdata.homeEmail,
        "degree": this.empdata.degree,
        "notes": this.empdata.notes,
        "bankName": this.empdata.bankName,
        "accountNumber":this.empdata.accountNumber,
        "userName": this.empdata.userName,
        "password": this.empdata.password,
        "confirmPassword": this.empdata.confirmPassword,
        "ifscCode": this.empdata.ifscCode,
        "proof": this.empdata.proof,
        "dateOfJoining": this.empdata.dateOfJoining,
        "probationEndDate": this.empdata.probationEndDate,
        "probationStatus": this.empdata.probationStatus,
        "noticePeriod": this.empdata.noticePeriod,
        "backgroundCheckStatus": this.empdata.backgroundCheckStatus,
        "department":this.empdata.department,
        "businessArea": this.empdata.businessArea,
        "compensationComments": this.empdata.compensationComments,
        "frequency": this.empdata.frequency,
        "amount": this.empdata.amount,
        "emergencyName": this.empdata.emergencyName,
        "relationShip": this.empdata.relationShip,
        "emailId": this.empdata.emailId,
        "mobileNumber":this.empdata.mobileNumber,
        "projectName": this.empdata.projectName,
        "projectStartDate": this.empdata.projectStartDate,
        "projectEndDate": this.empdata.probationEndDate,
        "termtypeoffboard": this.empdata.termtypeoffboard,
        "termreasonoffboard": this.empdata.termreasonoffboard,
        "eligibleforrehire": this.empdata.eligibleforrehire,
        "lastworkingday": this.empdata.lastworkingday,
        "jobRole": this.empdata.jobRole,
            }

    this.subscription = this.http.updatedata("empdata/", parseInt(this.empdata.employeeid),sdata).subscribe({
      next: (data: any) => {
        console.log(data);

      }
    })
  }
  ngOnDestroy(): void {
    this.empdata = JSON.parse(localStorage.getItem("personaldata") || '{}')
    console.log(this.empdata)

    this.getjobData();
    this.getcompensationData();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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
}
