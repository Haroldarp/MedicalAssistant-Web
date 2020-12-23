import { ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component'

import { LoginPageComponent } from './componets/login-page/login-page.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { DoctorProfilePageComponent } from './componets/doctor-profile-page/doctor-profile-page.component';
import { PatientProfilePageComponent } from './componets/patient-profile-page/patient-profile-page.component';
import { HomeComponent } from './componets/home/home.component';

const appRoutes: Routes =[
    {path:'',component:HomeComponent },
    {path:'Login', component: LoginPageComponent},
    {path:'DoctorProfile', component: DoctorProfilePageComponent},
    {path:'PatientProfile', component: PatientProfilePageComponent}
];

export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);