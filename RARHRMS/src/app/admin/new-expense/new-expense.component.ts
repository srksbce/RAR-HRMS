import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Inewexpense } from './new-expense-model';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  NEWEXPENSE = {} as Inewexpense;

  constructor() { }

  ngOnInit() {
  }
  Newexp(f:NgForm){
    console.log(this.NEWEXPENSE);
  }


}
