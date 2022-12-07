import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Ipersonaldata } from './employeeinfo-model';


@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.css']
})
export class EmployeeinfoComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  educationData = [] as any;
  visaData = [] as any;
  PERSONAL = {} as Ipersonaldata;
  empdata = [] as any;
  subscription !: Subscription;
  personalData = [] as any;

  
  
  jobData=[] as any;
  compensationData=[] as any;



  constructor(
    private http: HttpService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.empdata = JSON.parse(localStorage.getItem("personaldata") || '{}')
    console.log(this.empdata)

    this.getEducationData();
    this.getvisainformation();

  }



  getEducationData() {
    let sdata = {
      "employeeid": parseInt(this.empdata.employeeid)
    }
    console.log(sdata)
    this.subscription = this.http.postdata("geteducation", sdata).subscribe({
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
      "employeeid": parseInt(this.empdata.employeeid),
      "empstatus": this.empdata.empstatus,
      "firstname": this.empdata.firstname,
      "lastname": this.empdata.lastname,
      "fullname": this.empdata.fullname,
      "dateofbirth": moment(this.empdata.dateofbirth),
      "ssn": this.empdata.ssn,
      "taxfilenumber": parseInt(this.empdata.taxfilenumber),
      "addressline1": this.empdata.addressline1,
      "addressline2": this.empdata.addressline2,
      "city": this.empdata.city,
      "state": this.empdata.state,
      "country": this.empdata.country,
      "zipcode": parseInt(this.empdata.zipcode),
      "contactnumber": parseInt(this.empdata.contactnumber),
      "emergencynumber": parseInt(this.empdata.emergencynumber),
      "emailaddress": this.empdata.emailaddress,
            }

    this.subscription = this.http.updatedata("empdata/", parseInt(this.empdata.employeeid),sdata).subscribe({
      next: (data: any) => {
        console.log(data);

      }
    })
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
