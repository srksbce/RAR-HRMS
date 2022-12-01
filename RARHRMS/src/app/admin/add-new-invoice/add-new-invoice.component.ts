import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm,Validators } from '@angular/forms';
import { Iinvoice } from './invoice-model';


@Component({
  selector: 'app-add-new-invoice',
  templateUrl: './add-new-invoice.component.html',
  styleUrls: ['./add-new-invoice.component.css']
})
export class AddNewInvoiceComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  newinvoice = {} as Iinvoice;
  
  constructor() { }

  ngOnInit(): void {
  }

}
