import { Component, OnDestroy, OnInit } from '@angular/core';
import { IEmployee } from './employee-details';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pendingrequest',
  templateUrl: './pendingrequest.component.html',
  styleUrls: ['./pendingrequest.component.css']
})
export class PendingrequestComponent implements OnInit, OnDestroy {

  employees = [] as IEmployee[];

  subscription!: Subscription;
  

  constructor(private http: HttpService,private router:Router) { }

  ngOnInit(): void {
    this.empdata();

  }

  empdata() {
    this.subscription = this.http.getData("reg").subscribe({
      next: (data: any) => {
        this.employees = data as IEmployee[];
        
      },
      error: reason => alert(reason.message + " " +" Unable to Get Employee Data")
    });
  }


  approved(id: number) {
    let sdata = {
      "status": "Approved",
      "id": id
    }
    if(confirm("Are You sure to Approve"))
    this.subscription = this.http.postdata('approve', sdata).subscribe({
      next: (data: any) => {
      
        if(data.status == "success" && data.statuscode == 200){
          alert("Employe Approved Successfully")
        }
        console.log(data);
        this.empdata()
      },
      error:reason=>alert(reason.message + " "+" Employee Approved Failed")
    })
  }

  reject(id:number){
    console.log(id);
    let rdata={
      "status": "Rejected",
      "id": id
    }
    if(confirm("Are You sure to Reject"))
    this.subscription = this.http.postdata('approve', rdata).subscribe({
      next: (data: any) => {
        if(data.status == "success" && data.statuscode == 200){
          alert("Employe Rejected Successfully")
        }
        console.log(data);
        this.empdata()
      },
      error:reason=>alert(reason.message + " "+" Employee Rejected Failed")
    })
  }

  viewdata(vitem: any){
    localStorage.setItem("updateuser", JSON.stringify(vitem)); 
    console.log(vitem);
    this.router.navigate(['/viewdetails'])
  }


  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

}
