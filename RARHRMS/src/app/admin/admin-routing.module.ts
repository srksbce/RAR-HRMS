import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewExpenseComponent } from '../superuser/new-expense/new-expense.component';
import { ActiveemployeedataComponent } from './activeemployeedata/activeemployeedata.component';
import { AddNewInvoiceComponent } from './add-new-invoice/add-new-invoice.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AmdpageComponent } from './amdpage/amdpage.component';
import { CompensationUpdateComponent } from './compensation-update/compensation-update.component';
import { DepartmentComponent } from './department/department.component';
import { DocumentComponent } from './document/document.component';
import { EducationUpdateComponent } from './education-update/education-update.component';
import { EmpexpdetailsComponent } from './empexpdetails/empexpdetails.component';
import { EmployeeExpensedataComponent } from './employee-expensedata/employee-expensedata.component';

import { JobTabComponent } from './job-tab/job-tab.component';
import { JobUpdateComponent } from './job-update/job-update.component';
import { InvoiceComponent } from './invoice/invoice.component';

import { LdbpageComponent } from './ldbpage/ldbpage.component';
import { ManagementExpensesComponent } from './management-expenses/management-expenses.component';
import { NewempComponent } from './newemp/newemp.component';
import { OperationalCostComponent } from './operational-cost/operational-cost.component';
import { OrganizationdataComponent } from './organizationdata/organizationdata.component';
import { PayrollexpensesComponent } from './payrollexpenses/payrollexpenses.component';
import { PendingrequestComponent } from './pendingrequest/pendingrequest.component';

import { ReceivablesComponent } from './receivables/receivables.component';
import { TemplateComponent } from './template/template.component';

import { UserdataComponent } from './userdata/userdata.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { VisaupdateComponent } from '../superuser/visaupdate/visaupdate.component';
import { AddNewInvoicesComponent } from '../superuser/add-new-invoices/add-new-invoices.component';
import { MyreqsComponent } from './myreqs/myreqs.component';
import { PendingComponent } from '../pending/pending.component';
import { PersonaldataComponent } from './personaldata/personaldata.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AccessLevelsComponent } from './access-levels/access-levels.component';
import { TimeoffComponent } from './timeoff/timeoff.component';
import { EmployeeFieldsComponent } from './employee-fields/employee-fields.component';





const routes: Routes = [
  { path: '', component: AdminDashboardComponent },

  { path: 'department', component: DepartmentComponent },

  { path: 'orgdata', component: OrganizationdataComponent },
  { path: 'pendingrequest', component: PendingrequestComponent },
  { path: 'education-update', component: EducationUpdateComponent },
  { path: 'visaupdate', component: VisaupdateComponent },
  { path: 'viewdetails', component: ViewdetailsComponent },
  { path: 'ldbpage', component: LdbpageComponent },
  { path: 'receivables', component: ReceivablesComponent },
  { path: 'personaldata', component: PersonaldataComponent },
  { path: 'amdpage', component: AmdpageComponent },
  { path: 'payrollexpenses', component: PayrollexpensesComponent },
  { path: 'userdata', component: UserdataComponent },
  { path: 'userdetails', component: UserdetailsComponent },
  { path: 'empexpdetails', component: EmpexpdetailsComponent },
  { path: 'operationalcost', component: OperationalCostComponent },
  { path: 'employeeexpensedata', component: EmployeeExpensedataComponent },
  { path: 'userdata', component: UserdataComponent },
  { path: 'new-expense', component: NewExpenseComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'managementexpenses', component: ManagementExpensesComponent },
  { path: 'newemp', component: NewempComponent },
  { path: 'activeemployeedata', component: ActiveemployeedataComponent },
  { path: 'compensationupdate', component: CompensationUpdateComponent },
  { path: 'jobtab', component: JobTabComponent },
  { path: 'job-update', component: JobUpdateComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'addNewInvoice', component: AddNewInvoiceComponent },
  { path: 'timesheet', component: TimesheetComponent },



  { path: 'addNewInvoices', component: AddNewInvoicesComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'myreqs', component: MyreqsComponent },
  { path: 'pending', component: PendingComponent },
  { path: 'access-levels', component: AccessLevelsComponent },
  { path: 'timeoff', component: TimeoffComponent },
  {path:'Employee-fields',component:EmployeeFieldsComponent}





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
