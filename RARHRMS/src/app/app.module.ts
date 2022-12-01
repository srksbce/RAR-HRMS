import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ManagerComponent } from './manager/manager/manager.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { ManagerLayoutComponent } from './layouts/manager-layout/manager-layout.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
import { TemplateComponent } from './admin/template/template.component';





@NgModule({
  declarations: [
    AppComponent,
    AuthenticationLayoutComponent,
    AdminLayoutComponent,

    ManagerComponent,
    EmployeeComponent,
    ManagerLayoutComponent,
    EmployeeLayoutComponent,
   
    
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,




  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
