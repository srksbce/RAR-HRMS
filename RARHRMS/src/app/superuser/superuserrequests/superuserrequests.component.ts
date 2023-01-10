import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IExpensedata, Iinvoices } from './superuser-model';
import { HttpService } from 'src/app/services/http.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-superuserrequests',
  templateUrl: './superuserrequests.component.html',
  styleUrls: ['./superuserrequests.component.css']
})
export class SuperuserrequestsComponent implements OnInit {
  LOGIN:any;
  Expensedata = {} as IExpensedata[];
  Invoice = {} as Iinvoices[];
  employeeeexpense = {} as any;
  empids = {} as any;
  subscription!: Subscription;
  superuserrequests: any;
  totalInvoicesAmount:number = 0
  totalExpAmount:number = 0



  constructor(private http: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.LOGIN = JSON.parse(localStorage.getItem('personaldata') || '{}');
    this.expenses();
    this.invoices();
  }

  expenses() {
    this.subscription = this.http.getData("MyExpenses").subscribe({
      next: (data: any) => {
        console.log(data);
        this.Expensedata = data as IExpensedata[];
        this.Expensedata.forEach((el:IExpensedata)=>{
          this.totalExpAmount = this.totalExpAmount + el.amount
        })
      },
      error: reason => console.log(reason)
    });
  }

  invoices() {
    this.subscription = this.http.getData("Invoice").subscribe({
      next: (data: any) => {
        console.log(data);
        this.Invoice = data as Iinvoices[];
        this.Invoice.forEach((el:Iinvoices)=>{
          this.totalInvoicesAmount = this.totalInvoicesAmount + el.amount
        })
      },
      error: reason => console.log(reason)
    });

  }
  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

}