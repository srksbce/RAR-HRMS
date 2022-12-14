import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobdetailsComponent } from './jobdetails/jobdetails.component';


import { AddNewInvoicesComponent } from './add-new-invoices/add-new-invoices.component';
import { AddeducationComponent } from './addeducation/addeducation.component';
import { NewExpenseComponent } from './new-expense/new-expense.component';

import { SuperuserComponent } from './superuser/superuser.component';
import { SuperuserinfoComponent } from './superuserinfo/superuserinfo.component';

import { SuperuserrequestsComponent } from './superuserrequests/superuserrequests.component';
import { VisaupdateComponent } from './visaupdate/visaupdate.component';

const routes: Routes = [
  { path: 'superuser', component: SuperuserComponent },
  { path: 'superuserinfo', component: SuperuserinfoComponent },
  { path: 'superuserrequests', component: SuperuserrequestsComponent },

  { path: 'jobdetails', component: JobdetailsComponent },
  { path: 'visaupdate', component: VisaupdateComponent },

  { path: 'addeducation', component: AddeducationComponent },
  { path: 'visaupdate', component: VisaupdateComponent },
  { path: 'newexpense', component: NewExpenseComponent },
  { path: 'addnewinvoice', component: AddNewInvoicesComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperuserRoutingModule { }
