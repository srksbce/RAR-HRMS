import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IEmployeeExpensedata } from './employee-expensedatamodel';

@Component({
  selector: 'app-employee-expensedata',
  templateUrl: './employee-expensedata.component.html',
  styleUrls: ['./employee-expensedata.component.css']
})
export class EmployeeExpensedataComponent implements OnInit {
  EmployeeExpensedata = [] as IEmployeeExpensedata[];
  searchValue: any;
  subscription!: Subscription;
  constructor(private http:HttpService,private router:Router) { }
  // constructor() { }

  // ngOnInit(): void {
  //   this.EmployeeExpensedata=[
  //     {EmployeeId:101, FirstName:'poorna', LastName:'ramisetti', TotalEmployeeExpenses : '$12423' },
  //     {EmployeeId:102, FirstName:'samyuktha', LastName:'alakanti', TotalEmployeeExpenses : '$12425' },
  //     {EmployeeId:103, FirstName:'rohini', LastName:'chinnu', TotalEmployeeExpenses : '$12723' },
  //     {EmployeeId:104, FirstName:'mounika', LastName:'boinapally', TotalEmployeeExpenses : '$18423' },
  //     {EmployeeId:101, FirstName:'poorna', LastName:'ramisetti', TotalEmployeeExpenses : '$12423' },
  //     {EmployeeId:101, FirstName:'poorna', LastName:'ramisetti', TotalEmployeeExpenses : '$12423' },
  //     {EmployeeId:101, FirstName:'poorna', LastName:'ramisetti', TotalEmployeeExpenses : '$12423' },
  //     {EmployeeId:102, FirstName:'samyuktha', LastName:'alakanti', TotalEmployeeExpenses : '$12425' },
  //     {EmployeeId:103, FirstName:'rohini', LastName:'chinnu', TotalEmployeeExpenses : '$12723' },
  //     {EmployeeId:104, FirstName:'mounika', LastName:'boinapally', TotalEmployeeExpenses : '$18423' },
  //     {EmployeeId:102, FirstName:'samyuktha', LastName:'alakanti', TotalEmployeeExpenses : '$12425' },
  //     {EmployeeId:103, FirstName:'rohini', LastName:'chinnu', TotalEmployeeExpenses : '$12723' },
  //     {EmployeeId:104, FirstName:'mounika', LastName:'boinapally', TotalEmployeeExpenses : '$18423' },
  //   ]
  

  

  ngOnInit(): void {
    this.employeeaccess();
  }

  employeeaccess() {
    this.subscription = this.http.getData("Register").subscribe({
      next: (data: any) => {
        this.EmployeeExpensedata = data.result as IEmployeeExpensedata[];
        console.log (this.EmployeeExpensedata)
      },
      error: reason => console.log(reason)
    });
  }
  select(emp:any){
    localStorage.setItem("empexpdetails",JSON.stringify(emp) );
    this.router.navigate(["/admin/empexpdetails"])
  }
 
  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }
  }

