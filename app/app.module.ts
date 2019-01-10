import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login.component';
import { RegistrationComponent } from './components/registration.component';
import { HomeComponent } from './components/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {HackerService} from './components/services/hackerrank.service'
import { SuccessComponent } from './components/success.component';

@NgModule({
  declarations: [
    AppComponent,LoginComponent,RegistrationComponent,HomeComponent,SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HackerService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
