import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationPageThreeComponent } from './registration-page-three/registration-page-three.component';
import { RegistrationPageTwoComponent } from './registration-page-two/registration-page-two.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SecurityquestionsComponent } from './securityquestions/securityquestions.component';
import { SignupComponent } from './signup/signup.component';
import { TemplateComponent } from '../admin/template/template.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'securityquestions', component: SecurityquestionsComponent },
  { path: 'registrationpage3', component: RegistrationPageThreeComponent },
  { path: 'registrationpage2', component: RegistrationPageTwoComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'reg', component: RegisterComponent },
  { path: 'temp', component: TemplateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
