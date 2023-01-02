import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IActive } from './activeemployeedata';

@Component({
  selector: 'app-activeemployeedata',
  templateUrl: './activeemployeedata.component.html',
  styleUrls: ['./activeemployeedata.component.css'],
})
export class ActiveemployeedataComponent implements OnInit {
  actemployees = [] as IActive[];
  searchValue: any;
  subscription!: Subscription;
  constructor(private http:HttpService,private router:Router) { }

  ngOnInit(): void {
    this.empdata();
  }

  empdata() {
    this.subscription = this.http.getData("Register").subscribe({
      next: (data: any) => {
        console.log(data);
        this.actemployees = data as IActive[];
      },
      error: reason => console.log(reason)
    });

  }
  select(act:any){
    localStorage.setItem("personaldata",JSON.stringify(act) );
    this.router.navigate(["/admin/personaldata"])
  }
  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}
