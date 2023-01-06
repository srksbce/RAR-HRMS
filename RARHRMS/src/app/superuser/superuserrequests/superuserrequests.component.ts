import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IExpensedata } from './superuser-model';
import { HttpService } from 'src/app/services/http.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-superuserrequests',
  templateUrl: './superuserrequests.component.html',
  styleUrls: ['./superuserrequests.component.css']
})
export class SuperuserrequestsComponent implements OnInit {
  Expensedata = [] as IExpensedata [];
  employeeeexpense= {} as any;
  empids ={} as any;
  subscription!: Subscription;
  superuserrequests: any;

  constructor(private http:HttpService,private router:Router) { }

  ngOnInit(): void {
    this.employeeeexpense=JSON.parse(localStorage.getItem('superuserrequests')||'{}');
    console.log(this.employeeeexpense)
    this.empids={
      empid: parseInt(this.employeeeexpense.employeeid) 
    }
    console.log(this.empids)
    this.superuserrequests();
  }
  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}
