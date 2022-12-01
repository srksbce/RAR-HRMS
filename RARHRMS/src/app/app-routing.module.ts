import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
import { ManagerLayoutComponent } from './layouts/manager-layout/manager-layout.component';
import { ADMIN_ROUTES } from './routing/admin-routing';
import { AUTHENTICATION_ROUTES } from './routing/authentication-routing';
import { EMPLOYEE_ROUTES } from './routing/employee-routing';
import { MANAGER_ROUTES } from './routing/manager-routing';
import { AmdbuttonsComponent } from './shared/amdbuttons/amdbuttons.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: AuthenticationLayoutComponent, children: AUTHENTICATION_ROUTES },
  { path: '', component: AdminLayoutComponent, children: ADMIN_ROUTES },
  { path: 'admin', component: AdminLayoutComponent, children: ADMIN_ROUTES },
  {path:'emp',component:EmployeeLayoutComponent, children:EMPLOYEE_ROUTES},
  {path:'manager',component:ManagerLayoutComponent, children:MANAGER_ROUTES},
  { path: 'amdbuttons', component: AmdbuttonsComponent },
  {path:'navbar',component: NavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
