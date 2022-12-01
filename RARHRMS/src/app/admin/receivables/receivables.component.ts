import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IReceivables } from './receivables-model';

@Component({
  selector: 'app-receivables',
  templateUrl: './receivables.component.html',
  styleUrls: ['./receivables.component.css']
})
export class ReceivablesComponent implements OnInit {

  receivables= [] as IReceivables[];

  // constructor() { }

  // ngOnInit(): void {
  //   this.receivables=[
  //     {recClientId:101, recClientName:'TCS', recReceivables:'123.06'},
  //     {recClientId:105, recClientName:'Fujifilm', recReceivables:'155.08'},
  //     {recClientId:103, recClientName:'Accenture', recReceivables:'180.06'},
  //     {recClientId:102, recClientName:'IBM', recReceivables:'666.06'},
  //     {recClientId:104, recClientName:'Cognizant', recReceivables:'222.06'},
  //     {recClientId:106, recClientName:'Capgemini', recReceivables:'333.03'},
  //     {recClientId:107, recClientName:'Legato', recReceivables:'444.04'},
  //     {recClientId:108, recClientName:'Adb', recReceivables:'555.05'},
  //     {recClientId:109, recClientName:'Southerland', recReceivables:'777.07'},
  //     {recClientId:110, recClientName:'LandT', recReceivables:'888.08'},
  //     {recClientId:111, recClientName:'Hitachi', recReceivables:'999.06'},
  //     {recClientId:112, recClientName:'Wipro', recReceivables:'879.06'},  
  //     {recClientId:113, recClientName:'Phonix', recReceivables:'998.06'},
  //     {recClientId:114, recClientName:'Infosys', recReceivables:'1568.06'},
  //     {recClientId:115, recClientName:'TCS', recReceivables:'123.06'}
  //   ]
      
  subscription!: Subscription;

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.receivable();
  }

  receivable() {
    this.subscription = this.http.getData("accessdata").subscribe({
      next: (data: any) => {
        this.receivables = data.result as IReceivables[];
        console.log(this.receivables)
      },
      error: reason => console.log(reason)
    });
  }
 
  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }
      

  }


