import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
import { ManagerLayoutComponent } from './layouts/manager-layout/manager-layout.component';
import { SuperuserlayoutComponent } from './layouts/superuserlayout/superuserlayout.component';
import { ADMIN_ROUTES } from './routing/admin-routing';
import { AUTHENTICATION_ROUTES } from './routing/authentication-routing';
import { EMPLOYEE_ROUTES } from './routing/employee-routing';
import { MNG_ROUTES } from './routing/manager-routing';
import { SUP_ROUTES } from './routing/superuser-routing';

import { AmdbuttonsComponent } from './shared/amdbuttons/amdbuttons.component';
import { LoginComponent } from './shared/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: AuthenticationLayoutComponent, children: AUTHENTICATION_ROUTES },

  { path: 'admin', component: AdminLayoutComponent, children: ADMIN_ROUTES },
  {path:'emp',component:EmployeeLayoutComponent, children:EMPLOYEE_ROUTES},
  
  { path: 'amdbuttons', component: AmdbuttonsComponent },
  {path:'navbar',component: NavbarComponent},
  {path:'manager',component:ManagerLayoutComponent,children:MNG_ROUTES},
  {path:'superuser',component:SuperuserlayoutComponent,children:SUP_ROUTES},

  {path:'navbar',component: NavbarComponent},
  {path:'login',component:LoginComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
