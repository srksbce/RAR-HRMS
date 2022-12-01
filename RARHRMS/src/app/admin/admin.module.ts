import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { LaunchpageComponent } from './launchpage/launchpage.component';
import { VisaupdateComponent } from './visaupdate/visaupdate.component';
import { OrganizationdataComponent } from './organizationdata/organizationdata.component';
import { PendingrequestComponent } from './pendingrequest/pendingrequest.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { LdbpageComponent } from './ldbpage/ldbpage.component';
import { ReceivablesComponent } from './receivables/receivables.component';
import { PersonaldataComponent } from './personaldata/personaldata.component';
import { AmdpageComponent } from './amdpage/amdpage.component';
import { PayrollexpensesComponent } from './payrollexpenses/payrollexpenses.component';
import { EmpexpdetailsComponent } from './empexpdetails/empexpdetails.component';
import { OperationalCostComponent } from './operational-cost/operational-cost.component';
import { EmployeeExpensedataComponent } from './employee-expensedata/employee-expensedata.component';
import { UserdataComponent } from './userdata/userdata.component';
import { EducationUpdateComponent } from './education-update/education-update.component';
import { ManagementExpensesComponent } from './management-expenses/management-expenses.component';
import { NewempComponent } from './newemp/newemp.component';
import { ActiveemployeedataComponent } from './activeemployeedata/activeemployeedata.component';
import { CompensationUpdateComponent } from './compensation-update/compensation-update.component';
import { JobTabComponent } from './job-tab/job-tab.component';
import { JobUpdateComponent } from './job-update/job-update.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { FormsModule } from '@angular/forms';
import { SearchfilterPipe } from './searchfilter.pipe';
import { DocumentComponent } from './document/document.component';

import { AddNewInvoiceComponent } from './add-new-invoice/add-new-invoice.component';
import { SuperuserComponent } from './superuser/superuser.component';





@NgModule({
  declarations: [
    EmployeeComponent,
    DepartmentComponent,
    AdminDashboardComponent,
    LaunchpageComponent,
    VisaupdateComponent,
    OrganizationdataComponent,
    PendingrequestComponent,
    ViewdetailsComponent,
    LdbpageComponent,
    ReceivablesComponent,
    PersonaldataComponent,
    AmdpageComponent,
    PayrollexpensesComponent,
    EmpexpdetailsComponent,
    OperationalCostComponent,
    EmployeeExpensedataComponent,
    UserdataComponent,
    JobUpdateComponent,
    EducationUpdateComponent,
    ManagementExpensesComponent,
    NewempComponent,
    ActiveemployeedataComponent,
    CompensationUpdateComponent,
    JobTabComponent,  
    UserdetailsComponent, 
    SearchfilterPipe,
   DocumentComponent,

   AddNewInvoiceComponent,
     SuperuserComponent,
    
  

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule
    

  ]
})
export class AdminModule { }
