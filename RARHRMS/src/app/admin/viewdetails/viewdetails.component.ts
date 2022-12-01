import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IViewdetails } from './viewdetails-model';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  viewdetails= {} as any;
 
 subscription!: Subscription; 
  constructor(private http:HttpService,
    private router:Router) { }
 

  ngOnInit(): void {
    this.viewdetails=JSON.parse(localStorage.getItem('updateuser')||'{}');
    console.log(this.viewdetails)
    // this.Viewdetail();
  }
  // Viewdetail(){
   
  //   this.subscription = this.http.getData("updatedata").subscribe({
  //     next: (data: any) => {
  //       this.viewdetails = data.result as IViewdetails [];
  //       console.log(this.viewdetails)
  //     },
  //   });
 
  // }

    ngOnDestroy(): void {
      if(this.subscription)
      this.subscription.unsubscribe();
    }
  }
