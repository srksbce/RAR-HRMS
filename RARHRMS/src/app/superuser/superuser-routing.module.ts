import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeducationComponent } from './addeducation/addeducation.component';
import { SuperuserComponent } from './superuser/superuser.component';
import { SuperuserinfoComponent } from './superuserinfo/superuserinfo.component';

import { SuperuserrequestsComponent } from './superuserrequests/superuserrequests.component';
import { VisaupdateComponent } from './visaupdate/visaupdate.component';

const routes: Routes = [
  {path:'superuser',component:SuperuserComponent},
  {path:'superuserinfo',component:SuperuserinfoComponent},
  {path:'superuserrequests',component:SuperuserrequestsComponent},
  {path:'addeducation',component:AddeducationComponent},
  {path:'visaupdate',component:VisaupdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperuserRoutingModule { }
