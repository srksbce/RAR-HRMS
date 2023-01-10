import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { HttpService } from 'src/app/services/http.service';
import { Inewexpense } from './new-expense-model';


@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent implements OnInit {
  
  
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  NEWEXPENSE = {} as Inewexpense;
  afuConfig = {
    maxSize : 30,
    multiple: false,
    formatsAllowed: ".jpg,.png",
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};
  
 
empids = {} as any;
subscription!: Subscription;
constructor(private http: HttpService, private router: Router) { }


  ngOnInit(): void {
  }
  NewEXPENSE(f:NgForm){
      this.NEWEXPENSE.status = "In Review"
      let empdata = JSON.parse(localStorage.getItem('personaldata') || '{}')
      this.NEWEXPENSE.employeeId = empdata.employeeId
      console.log(this.NEWEXPENSE);
  
      this.subscription = this.http.postdata("Invoice", this.NEWEXPENSE).subscribe({
        next: (data: any) => {
          console.log(data);
          if (data) {
            alert("Data Updated Successfully")
            this.router.navigate(['/superuser/superuserrequests'])
            f.resetForm()
          }
  
  
        },
      });
  }


  PostSavedInvoice() {
    this.NEWEXPENSE.status = "Draft"
    let empdata = JSON.parse(localStorage.getItem('personaldata') || '{}')
    this.NEWEXPENSE.employeeId = empdata.employeeId
    console.log(this.NEWEXPENSE);
    this.subscription = this.http.postdata("Invoice", this.NEWEXPENSE).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data) {
          alert("Data Updated Successfully")
          this.router.navigate(['/superuser/superuserrequests'])

        }

      },
    });
  }

  }

