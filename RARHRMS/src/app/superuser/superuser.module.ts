import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperuserRoutingModule } from './superuser-routing.module';
import { SuperuserComponent } from './superuser/superuser.component';
import { SuperuserexpensesComponent } from './superuserexpenses/superuserexpenses.component';
import { SuperuserinfoComponent } from './superuserinfo/superuserinfo.component';

import { SuperuserrequestsComponent } from './superuserrequests/superuserrequests.component';
import { FormsModule } from '@angular/forms';
import { AddeducationComponent } from './addeducation/addeducation.component';


@NgModule({
  declarations: [
    SuperuserComponent,
    SuperuserexpensesComponent,
    SuperuserinfoComponent,

    SuperuserrequestsComponent,
      AddeducationComponent
  ],
  imports: [
    CommonModule,
    SuperuserRoutingModule,
    FormsModule
  ]
})
export class SuperuserModule { }
