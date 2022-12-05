import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Inewinvoices } from './add-new-invoices-model';

@Component({
  selector: 'app-add-new-invoices',
  templateUrl: './add-new-invoices.component.html',
  styleUrls: ['./add-new-invoices.component.css']
})
export class AddNewInvoicesComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
NEWINVOICES = {} as Inewinvoices;
  afuConfig = {
    maxSize : 30,
    multiple: false,
    formatsAllowed: ".jpg,.png",
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};

  constructor() { }

  ngOnInit(): void {
  }
  NewINVOICES(f:NgForm){
    console.log(this.NEWINVOICES);
  }
}
