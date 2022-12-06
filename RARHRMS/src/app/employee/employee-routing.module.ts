import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';
import { EmppersonaldataComponent } from './emppersonaldata/emppersonaldata.component';

const routes: Routes = [
  {path:'employeeinfo',component:EmployeeinfoComponent},
  {path:'emppersonaldata',component:EmppersonaldataComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
