import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AmdbuttonsComponent } from './amdbuttons/amdbuttons.component';
import { AuthenticHeaderComponent } from './authentic-header/authentic-header.component';
import { AuthenticFooterComponent } from './authentic-footer/authentic-footer.component';


@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent,
    AmdbuttonsComponent,
    AuthenticHeaderComponent,
    AuthenticFooterComponent,
    NavbarComponent,
    AmdbuttonsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [AdminHeaderComponent, AdminFooterComponent,AmdbuttonsComponent,AuthenticFooterComponent,AuthenticHeaderComponent,NavbarComponent],
})
export class SharedModule { }
