import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { EmpMyrequestsComponent } from './emp-myrequests/emp-myrequests.component';
import { EmpPeopleComponent } from './emp-people/emp-people.component';
import { EmpTimesheetComponent } from './emp-timesheet/emp-timesheet.component';
import { EmpdocumentdataComponent } from './empdocumentdata/empdocumentdata.component';
import { EmpjobdataComponent } from './empjobdata/empjobdata.component';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';
import { EmpmyexpensesComponent } from './empmyexpenses/empmyexpenses.component';
import { EmpmyinvoicesComponent } from './empmyinvoices/empmyinvoices.component';
import { EmppersonaldataComponent } from './emppersonaldata/emppersonaldata.component';


@NgModule({
  declarations: [
    EmpMyrequestsComponent,
    EmpPeopleComponent,
    EmpTimesheetComponent,
    EmpdocumentdataComponent,
    EmpjobdataComponent,
    EmployeeinfoComponent,
    EmpmyexpensesComponent,
    EmpmyinvoicesComponent,
    EmppersonaldataComponent



  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class EmployeeModule { }
