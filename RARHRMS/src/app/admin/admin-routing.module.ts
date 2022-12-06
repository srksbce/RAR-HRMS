import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewExpenseComponent } from './new-expense/new-expense.component';
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
import { EmployeeComponent } from './employee/employee.component';
import { JobTabComponent } from './job-tab/job-tab.component';
import { JobUpdateComponent } from './job-update/job-update.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LaunchpageComponent } from './launchpage/launchpage.component';
import { LdbpageComponent } from './ldbpage/ldbpage.component';
import { ManagementExpensesComponent } from './management-expenses/management-expenses.component';
import { NewempComponent } from './newemp/newemp.component';
import { OperationalCostComponent } from './operational-cost/operational-cost.component';
import { OrganizationdataComponent } from './organizationdata/organizationdata.component';
import { PayrollexpensesComponent } from './payrollexpenses/payrollexpenses.component';
import { PendingrequestComponent } from './pendingrequest/pendingrequest.component';
import { PersonaldataComponent } from './personaldata/personaldata.component';
import { ReceivablesComponent } from './receivables/receivables.component';
import { TemplateComponent } from './template/template.component';

import { UserdataComponent } from './userdata/userdata.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { VisaupdateComponent } from './visaupdate/visaupdate.component';
import { AddNewInvoicesComponent } from './add-new-invoices/add-new-invoices.component';
import { MyreqsComponent } from './myreqs/myreqs.component';
import { PendingComponent } from '../pending/pending.component';
import { EmpPeopleComponent } from './emp-people/emp-people.component';
import { EmpMyrequestsComponent } from './emp-myrequests/emp-myrequests.component';
import { EmpTimesheetComponent } from './emp-timesheet/emp-timesheet.component';

import { SuperuserinfoComponent } from './superuserinfo/superuserinfo.component';
import { SuperuserexpensesComponent } from './superuserexpenses/superuserexpenses.component';
<<<<<<< HEAD
import { ManagerComponent } from './manager/manager.component';
=======
import { EmpmyinvoicesComponent } from './empmyinvoices/empmyinvoices.component';
import { EmpmyexpensesComponent } from './empmyexpenses/empmyexpenses.component';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';
import { SuperuserrequestsComponent } from './superuserrequests/superuserrequests.component';
import { EmppersonaldataComponent } from './emppersonaldata/emppersonaldata.component';
import { EmpjobdataComponent } from './empjobdata/empjobdata.component';
import { EmpdocumentdataComponent } from './empdocumentdata/empdocumentdata.component';
>>>>>>> 5959f03be944f612815f7d2e12fb654ce7f1b21d

const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'launchpage', component: LaunchpageComponent },
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
  {path: 'userdetails', component: UserdetailsComponent},
  { path: 'empexpdetails', component: EmpexpdetailsComponent },
  { path: 'operationalcost', component: OperationalCostComponent },
  { path: 'employeeexpensedata', component: EmployeeExpensedataComponent },
  { path: 'userdata', component: UserdataComponent },
  {path:'new-expense',component:NewExpenseComponent},
  {path: 'invoice',component :InvoiceComponent},
  { path: 'managementexpenses', component: ManagementExpensesComponent },
  { path: 'newemp', component: NewempComponent },
  { path: 'activeemployeedata', component: ActiveemployeedataComponent },
  { path: 'compensationupdate', component: CompensationUpdateComponent },
  { path: 'jobtab', component: JobTabComponent },
  {path:'job-update' ,component:JobUpdateComponent},
  {path:'document',component:DocumentComponent},
  {path:'addNewInvoice',component:AddNewInvoiceComponent},
  {path:'empinfo',component:EmployeeinfoComponent},


  {path:'addNewInvoices',component:AddNewInvoicesComponent},
  {path: 'template' ,component:TemplateComponent},
  {path: 'myreqs' ,component:MyreqsComponent},
  {path:'pending',component:PendingComponent},

  {path: 'emppeople' ,component:EmpPeopleComponent},
  {path: 'empmyrequests' ,component:EmpMyrequestsComponent},
  {path: 'emptimesheet' ,component:EmpTimesheetComponent},
<<<<<<< HEAD
  {path: 'manager',component:ManagerComponent},



=======
  {path: 'empmyinvoices' ,component:EmpmyinvoicesComponent},
  {path: 'empmyexpenses' ,component:EmpmyexpensesComponent},
 
  {path:'superuserrequests',component:SuperuserrequestsComponent},
>>>>>>> 5959f03be944f612815f7d2e12fb654ce7f1b21d
  {path:'superuserinfo',component:SuperuserinfoComponent},
  {path:'superuserexpenses',component:SuperuserexpensesComponent},

  {path:'emppersonaldata',component:EmppersonaldataComponent},
  {path:'empjobdata',component:EmpjobdataComponent},
  {path:'empdocumentdata',component:EmpdocumentdataComponent}





  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
