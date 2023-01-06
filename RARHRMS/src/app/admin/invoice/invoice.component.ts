import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IInvoicedata } from './invoice-model';



@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  IDATA = [] as IInvoicedata [];
  invoicebills= {} as any;
  // empids ={} as any;
  // subscription!: Subscription;

  constructor(private http:HttpService,private router:Router) { }

  ngOnInit(): void {
    // this.invoicebills=JSON.parse(localStorage.getItem('empexpenses')||'{}');
    // console.log(this.invoicebills)
    // this.empids={
    //   empid: parseInt(this.invoicebills.employeeid) 
    // }
    // console.log(this.empids)
    //  this.invoicebills();
  }
  
 
  //  invoicedetails(){
  //   console.log(this.empids);
  //   this.subscription = this.http.postdata("empexpenses",this.empids).subscribe({
  //     next: (data: any) => {
  //       this.IDATA = data.result as IInvoicedata[];
  //       console.log(this.IDATA)
  //     },
  //   });
    
  }
  
  // ngOnDestroy(): void {
  //   if(this.subscription)
  //   this.subscription.unsubscribe();
  // }


// invoice(f: NgForm) {

// this.invoicebills = {
//   "EmployeeId": this.IDATA.EmployeeId,
//   "Invoicenumber":this.IDATA.Invoicenumber,
//     "Invoicedate":this.IDATA.Invoicedate,
//     "Attachment":this.IDATA.Attachment,
//     "amount":this.IDATA.amount,
//     "Invoicetype":this.IDATA.Invoicetype,
//     "status":this.IDATA.status,
   
// }
// console.log(this.invoicebills)
// }
