import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IExpensedata } from './empexpdetailsmodul';

@Component({
  selector: 'app-empexpdetails',
  templateUrl: './empexpdetails.component.html',
  styleUrls: ['./empexpdetails.component.css']
})
export class EmpexpdetailsComponent implements OnInit {
  Expensedata = [] as IExpensedata [];
  employeeeexpense= {} as any;
  empids ={} as any;
  subscription!: Subscription;
  
  constructor(private http:HttpService,private router:Router) { }

  ngOnInit(): void {

    
    this.employeeeexpense=JSON.parse(localStorage.getItem('empexpdetails')||'{}');
    console.log(this.employeeeexpense)
    this.empids={
      empid: parseInt(this.employeeeexpense.employeeid) 
    }
    console.log(this.empids)
    this. empexpensesdetails();

  }



  empexpensesdetails(){
    console.log(this.empids);
    this.subscription = this.http.postdata("empexpdetails",this.empids).subscribe({
      next: (data: any) => {
        this.Expensedata = data.result as IExpensedata[];
        console.log(this.Expensedata)
      },
    });
    
  }
  
  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}
