import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperuserRoutingModule } from './superuser-routing.module';
import { SuperuserComponent } from './superuser/superuser.component';
import { SuperuserexpensesComponent } from './superuserexpenses/superuserexpenses.component';
import { SuperuserinfoComponent } from './superuserinfo/superuserinfo.component';
import { SuperuserinvoiceComponent } from './superuserinvoice/superuserinvoice.component';
import { SuppersonaldataComponent } from './suppersonaldata/suppersonaldata.component';
import { SuperuserrequestsComponent } from './superuserrequests/superuserrequests.component';
import { FormsModule } from '@angular/forms';
import { AddnewcompdetailsComponent } from './addnewcompdetails/addnewcompdetails.component';


@NgModule({
  declarations: [
    SuperuserComponent,
    SuperuserexpensesComponent,
    SuperuserinfoComponent,
    SuperuserinvoiceComponent,
    SuppersonaldataComponent,
    SuperuserrequestsComponent,
    AddnewcompdetailsComponent
  ],
  imports: [
    CommonModule,
    SuperuserRoutingModule,
    FormsModule
  ]
})
export class SuperuserModule { }
