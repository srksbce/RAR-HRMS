import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Inewinv} from './add-new-invoices-model';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { Router, Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-add-new-invoices',
  templateUrl: './add-new-invoices.component.html',
  styleUrls: ['./add-new-invoices.component.css']
})
export class AddNewInvoicesComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  NEWINVOICES = {} as any
  afuConfig = {
    maxSize : 30,
    multiple: false,
    formatsAllowed: ".jpg,.png",
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};


empids ={} as any;
subscription!: Subscription;
  constructor(private http:HttpService,private router:Router) { }

  ngOnInit(): void {
  }

  NewINVOICES(f:NgForm){
    this.NEWINVOICES.status = "In Review"
    let empdata = JSON.parse(localStorage.getItem('personaldata') ||'{}')
    this.NEWINVOICES.employeeId = empdata.employeeId
    console.log(this.NEWINVOICES);

    this.subscription = this.http.postdata("Invoice",this.NEWINVOICES).subscribe({
      next: (data: any) => {
     console.log(data);
     if(data){
      alert("Data Updated Successfully")
      this.router.navigate(['/superuser/superuserrequests'])
      f.resetForm()
     }

     
      },
  });
}


PostSavedInvoice(){
  this.NEWINVOICES.status = "Draft"
  let empdata = JSON.parse(localStorage.getItem('personaldata') ||'{}')
  this.NEWINVOICES.employeeId = empdata.employeeId
  console.log(this.NEWINVOICES);
  this.subscription = this.http.postdata("Invoice",this.NEWINVOICES).subscribe({
    next: (data: any) => {
   console.log(data);
   if(data){
    alert("Data Updated Successfully")
    this.router.navigate(['/superuser/superuserrequests'])
    
   }

    },
});
}
        
}