import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpMyrequestsComponent } from './emp-myrequests/emp-myrequests.component';
import { EmpPeopleComponent } from './emp-people/emp-people.component';
import { EmpTimesheetComponent } from './emp-timesheet/emp-timesheet.component';
import { EmpdocumentdataComponent } from './empdocumentdata/empdocumentdata.component';
import { EmpjobdataComponent } from './empjobdata/empjobdata.component';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';
import { EmpmyexpensesComponent } from './empmyexpenses/empmyexpenses.component';
import { EmpmyinvoicesComponent } from './empmyinvoices/empmyinvoices.component';
import { EmppersonaldataComponent } from './emppersonaldata/emppersonaldata.component';

const routes: Routes = [
  {path:'empmyinfo',component:EmployeeinfoComponent},
  {path:'emppersonaldata',component:EmppersonaldataComponent},
  {path:'empmyrequests',component:EmpMyrequestsComponent},
  {path:'emppeople',component:EmpPeopleComponent},
  {path:'emptimesheet',component:EmpTimesheetComponent},
  {path:'empdoctdata',component:EmpdocumentdataComponent},
  {path:'empjobdata',component:EmpjobdataComponent},
  {path:'empmyexpenses',component:EmpmyexpensesComponent},
  {path:'empmyinvoices',component:EmpmyinvoicesComponent},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
