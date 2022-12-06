import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperuserexpensesComponent } from '../superuserexpenses/superuserexpenses.component';
import { SuperuserinfoComponent } from '../superuserinfo/superuserinfo.component';
import { SuperuserrequestsComponent } from '../superuserrequests/superuserrequests.component';
import { SuperuserComponent } from './superuser.component';

const routes: Routes = [
  {path:'superuser',component:SuperuserComponent},
  {path:'superuserinfo',component:SuperuserinfoComponent},
  {path:'superuserexpenses',component:SuperuserexpensesComponent},
  {path:'superuserrequests',component:SuperuserrequestsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperuserRoutingModule { }
