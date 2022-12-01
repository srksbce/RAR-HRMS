
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Ipayrollexpenses } from './payrollexpenses';

@Component({
  selector: 'app-payrollexpenses',
  templateUrl: './payrollexpenses.component.html',
  styleUrls: ['./payrollexpenses.component.css']
})
export class PayrollexpensesComponent implements OnInit,OnDestroy{
 
  payrollexpense = [] as Ipayrollexpenses[];
  
  
  
  

 
   
  subscription!: Subscription;

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.payrollexpenses();
  }
  payrollexpenses() {
    this.subscription = this.http.getData("payrollaccess").subscribe({
      next: (data: any) => {
        this.payrollexpense = data.result as Ipayrollexpenses[];
      },
      error: reason => console.log(reason)
    });
  }
 
  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }
  }
