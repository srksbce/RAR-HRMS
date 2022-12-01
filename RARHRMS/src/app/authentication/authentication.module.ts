import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { RegistrationPageThreeComponent } from './registration-page-three/registration-page-three.component';

import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SecurityquestionsComponent } from './securityquestions/securityquestions.component';
import { RegistrationPageTwoComponent } from './registration-page-two/registration-page-two.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    RegistrationPageThreeComponent,
    ForgotpasswordComponent,
    SecurityquestionsComponent,
    RegistrationPageTwoComponent,
    ResetpasswordComponent,
    RegisterComponent

  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    SharedModule
 
  ]
})
export class AuthenticationModule { }




