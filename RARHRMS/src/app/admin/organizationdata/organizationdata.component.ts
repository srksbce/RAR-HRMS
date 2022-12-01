import { Component, OnInit,OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';


import { Subscription } from 'rxjs';
import { IExpense } from './org';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-organizationdata',
  templateUrl: './organizationdata.component.html',
  styleUrls: ['./organizationdata.component.css']
})
export class OrganizationdataComponent implements OnInit, OnDestroy {

  expense : any;

  exp={} as any;

  role:any;

  roles={} as any;

  entities:any;

  entity={} as any;



  subscription!: Subscription;


  constructor(private  http:HttpService) { }


  ngOnInit(): void {
     this.getExpense();
     this.getRoles();
     this.getEntity();   
  }

  getExpense(){
    this.subscription = this.http.getData('expenses').subscribe({
      next: (data: any) => {
        this.expense = data ;
      },
      error: reason => alert( " Unable To Show Expenses Data Due to"+ " " + reason.message )
    });
   } 

   getRoles(){
    this.subscription = this.http.getData('roles').subscribe({
      next:(data:any)=>{
        this.role = data ;
      },
      error: reason => alert( " Unable To Show Roles Data Due to"+ " " + reason.message )
    });
   }

   getEntity(){
    this.subscription = this.http.getData('orgndata').subscribe({
      next:(data:any)=>{
         this.entities = data;
      },
      error: reason => alert( " Unable To Show Entities Data Due to"+ " " + reason.message )
    });

   }
   
  

  postExpensesData(_data:NgForm){
    console.log(_data)
    if(this.exp.expenses==null || this.exp.expensecode==null){
      alert("Please Enter Expenses")
      return
    }
    if(confirm("Are You sure to Add Expenses"))
    console.log(this.exp)
    this.subscription = this.http.postdata('expenses',this.exp).subscribe({
      next:(da:any)=>{
        if(da){
          alert("Expenses Added Successfully");
          this.getExpense();
          _data.resetForm();
        }
        
      },
      error:reason=>alert(  "Adding Expenses  Failed Due to" + " "+ reason.message)
    });
    
 }


 postEntityData(_data:NgForm){
  if(this.entity.entity==null){
    alert("Please Enter Entity")
    return
  }
  if(confirm("Are You sure to Add Entity"))
  this.subscription= this.http.postdata('orgndata',this.entity).subscribe({
     next:(data:any)=>{
      if(data){
        alert("Entity Added Successfully");
        this.getEntity();
        _data.resetForm();
      }
       
     },
     error:reason=>alert(  "Adding Entity  Failed Due to" + " "+ reason.message)
  });
  
 }


 postRoleData(_data:NgForm){
  if(this.roles.roles==null){
    alert("Please Enter Role");
    return
  }
  if(confirm("Are You sure to Add Role"))
  this.subscription = this.http.postdata('roles',this.roles).subscribe({
    next:(_data:any)=>{
      if(_data){
        alert("Role Added Successfully");
        this.getRoles();
        _data.resetForm();
      }  
    },
    error:reason=>alert(  "Adding Role  Failed Due to" + " "+ reason.message)
  });
  
 }



  ngOnDestroy():void{
    if(this.subscription)
    this.subscription.unsubscribe();
  }



}
