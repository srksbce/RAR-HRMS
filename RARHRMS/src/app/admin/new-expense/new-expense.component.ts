import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Inewexpense } from './new-expense-model';
import { AngularFileUploaderModule } from "angular-file-uploader";

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent implements OnInit {
  
  
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  NEWEXPENSE = {} as Inewexpense;
  afuConfig = {
    maxSize : 30,
    multiple: false,
    formatsAllowed: ".jpg,.png",
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};
  constructor() { }

  ngOnInit() {
  }
  Newexp(f:NgForm){
    
  }

  }

