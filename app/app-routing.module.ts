import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { RegistrationComponent } from './components/registration.component';
import { SuccessComponent } from './components/success.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register", component:RegistrationComponent},
  {path:"success/:emailId",component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
