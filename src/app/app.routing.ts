import { ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component'

import { LoginPageComponent } from './componets/login-page/login-page.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { DoctorProfilePageComponent } from './componets/doctor-profile-page/doctor-profile-page.component';
import { PatientProfilePageComponent } from './componets/patient-profile-page/patient-profile-page.component';
import { AdminProfilePageComponent } from './componets/admin-profile-page/admin-profile-page.component';
import { SecretaryProfilePageComponent } from './componets/secretary-profile-page/secretary-profile-page.component';
import { HomePageComponent } from './componets/home-page/home-page.component';

const appRoutes: Routes =[
    {path:'',component:HomePageComponent },
    {path:'Login', component: LoginPageComponent},
    {path:'DoctorProfile', component: DoctorProfilePageComponent},
    {path:'PatientProfile', component: PatientProfilePageComponent},
    {path:'SecretaryProfile', component: SecretaryProfilePageComponent},
    {path:'AdminProfile', component: AdminProfilePageComponent}
];

export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);