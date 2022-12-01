import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IManagement } from './managementexpenses';

@Component({
  selector: 'app-management-expenses',
  templateUrl: './management-expenses.component.html',
  styleUrls: ['./management-expenses.component.css']
})
export class ManagementExpensesComponent implements OnInit {

  management = [] as IManagement[]
    // this.management=[
  
    //   {mgtEmployeeId:1000,mgtFirstName:'Samyuktha',mgtLastName:'Alakanti',mgtTotalManagementExpenses:'$1090'},
    //   {mgtEmployeeId:1001,mgtFirstName:'Rohini',mgtLastName:'Chinni',mgtTotalManagementExpenses:'$2040'},
    //   {mgtEmployeeId:1002,mgtFirstName:'Poorna',mgtLastName:'Ramisetti',mgtTotalManagementExpenses:'$1790'},
    //   {mgtEmployeeId:1003,mgtFirstName:'Mounika',mgtLastName:'Boinapally',mgtTotalManagementExpenses:'$2090'},
    //   {mgtEmployeeId:1004,mgtFirstName:'Priyanka',mgtLastName:'Chakrahari',mgtTotalManagementExpenses:'$3000'},
    //   {mgtEmployeeId:1005,mgtFirstName:'Koushik',mgtLastName:'Anumasa',mgtTotalManagementExpenses:'$1000'},
    //   {mgtEmployeeId:1006,mgtFirstName:'Praveen',mgtLastName:'Channu',mgtTotalManagementExpenses:'$4000'},
    //   {mgtEmployeeId:1007,mgtFirstName:'Govardhan',mgtLastName:'Morsu',mgtTotalManagementExpenses:'$3700'},
    //   {mgtEmployeeId:1008,mgtFirstName:'Rajesh',mgtLastName:'Seepana',mgtTotalManagementExpenses:'$2300'},
    //   {mgtEmployeeId:1009,mgtFirstName:'Muddasir',mgtLastName:'Mohammad',mgtTotalManagementExpenses:'$1790'},
    //   {mgtEmployeeId:1010,mgtFirstName:'Sripathi',mgtLastName:'Mamillapally',mgtTotalManagementExpenses:'$1400'},
    //   {mgtEmployeeId:1011,mgtFirstName:'Girish',mgtLastName:'Kollipara',mgtTotalManagementExpenses:'$2096'},
    //   {mgtEmployeeId:1012,mgtFirstName:'RajaShekar',mgtLastName:'Abbadi',mgtTotalManagementExpenses:'$1500'},
    //   {mgtEmployeeId:1013,mgtFirstName:'Arjun',mgtLastName:'Goruganti',mgtTotalManagementExpenses:'$1850'},
    //   {mgtEmployeeId:1014,mgtFirstName:'Ramakrishna',mgtLastName:'Shanshala',mgtTotalManagementExpenses:'$2798'},
      
    // ]
    subscription!: Subscription;

  constructor(private http:HttpService) { }

  ngOnInit(): void {

    this.managmentaccessdata();
  }

  managmentaccessdata() {
    this.subscription = this.http.getData("managmentaccessdata").subscribe({
      next: (data: any) => {
        this.management = data.result as IManagement[];
        console.log (this.management)
      },
      error: reason => console.log(reason)
    });
  }
 
  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }
  }
