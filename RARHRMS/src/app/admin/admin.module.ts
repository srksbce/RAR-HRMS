import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { DepartmentComponent } from './department/department.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SharedModule } from '../shared/shared.module';

import { VisaupdateComponent } from '../superuser/visaupdate/visaupdate.component';
import { OrganizationdataComponent } from './organizationdata/organizationdata.component';
import { PendingrequestComponent } from './pendingrequest/pendingrequest.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { LdbpageComponent } from './ldbpage/ldbpage.component';
import { ReceivablesComponent } from './receivables/receivables.component';

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
import { InvoiceComponent } from './invoice/invoice.component';

import { AddNewInvoicesComponent } from '../superuser/add-new-invoices/add-new-invoices.component';
import { TemplateComponent } from './template/template.component';

import { MyreqsComponent } from './myreqs/myreqs.component';
import { NewExpenseComponent } from '../superuser/new-expense/new-expense.component';

import { PersonaldataComponent } from './personaldata/personaldata.component';
import { AccessLevelsComponent } from './access-levels/access-levels.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { TimeoffComponent } from './timeoff/timeoff.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { CustomAccessComponent } from './custom-access/custom-access.component';










@NgModule({
  declarations: [

    DepartmentComponent,
    AdminDashboardComponent,

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
    InvoiceComponent,

    AddNewInvoicesComponent,
    TemplateComponent,

    MyreqsComponent,
    NewExpenseComponent,





    AddNewInvoicesComponent,
    TemplateComponent,

    MyreqsComponent,
    NewExpenseComponent,
    AccessLevelsComponent,
    TimeoffComponent,
    ApprovalsComponent,
    CustomAccessComponent
   






  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    AngularFileUploaderModule




  ]
})
export class AdminModule { }
