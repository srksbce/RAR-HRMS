import { Component, OnInit } from '@angular/core';

import { Subscriber, Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Itabledata } from './amdpage-model';






@Component({
  selector: 'app-amdpage',
  templateUrl: './amdpage.component.html',
  styleUrls: ['./amdpage.component.css']
})
export class AmdpageComponent implements OnInit {
  subscription!: Subscription;
  tabledata=[] as any

   

  constructor(private http:HttpService) { }



  ngOnInit(): void {

    this.userData();

  }



  userData() {

    this.subscription = this.http.getData("reg").subscribe({
      

      next: (data: any) => {

        this.tabledata= data as Itabledata 
        console.log(this.tabledata)
        

      },

      error: reason => console.log(reason)
     
    });

  }
  postUserData(item: any) {
    localStorage.setItem("updateuser", JSON.stringify(item))
    console.log(item)
    


  }

 

  ngOnDestroy(): void {

    if(this.subscription)

    this.subscription.unsubscribe();

  }


}

