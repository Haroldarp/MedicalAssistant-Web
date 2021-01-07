import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {routing, appRoutingProviders} from './app.routing'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MaterialModule} from './material.module';

import { LoginPageComponent } from './componets/login-page/login-page.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { DoctorProfilePageComponent } from './componets/doctor-profile-page/doctor-profile-page.component';
import { PatientProfilePageComponent } from './componets/patient-profile-page/patient-profile-page.component';
import { CreatePatientFormComponent } from './componets/create-patient-form/create-patient-form.component';
import { CreateDoctorFormComponent } from './componets/create-doctor-form/create-doctor-form.component';
import { AdminProfilePageComponent } from './componets/admin-profile-page/admin-profile-page.component';
import { SecretaryProfilePageComponent } from './componets/secretary-profile-page/secretary-profile-page.component';
import { HomePageComponent } from './componets/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavbarComponent,
    DoctorProfilePageComponent,
    PatientProfilePageComponent,
    HomePageComponent,
    CreatePatientFormComponent,
    CreateDoctorFormComponent,
    SecretaryProfilePageComponent,
    AdminProfilePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
