import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Icompdetails } from './compmodel';

@Component({
  selector: 'app-addnewcompdetails',
  templateUrl: './addnewcompdetails.component.html',
  styleUrls: ['./addnewcompdetails.component.css']
})
export class AddnewcompdetailsComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  COMPDETAILS = { } as  Icompdetails ;
  empdata = {} as any;
  subscription!: Subscription;
  constructor(private http: HttpService, private router:Router) { }

  ngOnInit(): void {
  }

newcomp(f:NgForm){
  this.COMPDETAILS.employeeId = parseInt(this.empdata.employeeid)

  console.log(this.COMPDETAILS)
  this.subscription=this.http.postdata("Compensation",this.COMPDETAILS).subscribe({
    next: (data: any) => {
      console.log(data)
      if(data.statuscode==200){
        alert("Data inserted sucessfully")
        this.router.navigate(["/superuser/superuserinfo"])
      }
    },
    error: (reason: any) => {
      console.log(reason);
      alert("Insertion of data is failed")
    }
  });
}
  }



