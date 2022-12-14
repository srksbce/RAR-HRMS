import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperuserComponent } from './superuser/superuser.component';
import { SuperuserinfoComponent } from './superuserinfo/superuserinfo.component';
import { SuperuserinvoiceComponent } from './superuserinvoice/superuserinvoice.component';
import { SuperuserrequestsComponent } from './superuserrequests/superuserrequests.component';
import { AddnewcompdetailsComponent } from './addnewcompdetails/addnewcompdetails.component';


const routes: Routes = [
  {path:'superuser',component:SuperuserComponent},
  {path:'superuserinfo',component:SuperuserinfoComponent},
  {path:'superuserrequests',component:SuperuserrequestsComponent},
  {path:'superuserinvoice',component:SuperuserinvoiceComponent},
  {path:'addnewcomp',component:AddnewcompdetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperuserRoutingModule { }
