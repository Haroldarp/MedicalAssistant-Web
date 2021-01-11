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
import { ConsultationTableComponent } from './componets/consultation-table/consultation-table.component';
import { AddConsultationFormComponent } from './componets/add-consultation-form/add-consultation-form.component';
import { CreatePatientFormComponent } from './componets/create-patient-form/create-patient-form.component';
import {CreateDoctorFormComponent} from './componets/create-doctor-form/create-doctor-form.component';

const appRoutes: Routes =[
    {path:'',component:HomePageComponent },
    {path:'Login', component: LoginPageComponent},
    {path:'DoctorProfile', component: DoctorProfilePageComponent, children:
    [
        {path:'', redirectTo: '/DoctorProfile/Table', pathMatch: 'full'},
        {path:'Table', component:ConsultationTableComponent},
        {path:'Add-Consultation', component:AddConsultationFormComponent}
    ]},
    {path:'PatientProfile', component: PatientProfilePageComponent, children:
    [
        {path:'', redirectTo: '/PatientProfile/Table', pathMatch: 'full'},
        {path:'Table', component:ConsultationTableComponent}
    ]},
    {path:'SecretaryProfile', component: SecretaryProfilePageComponent},
    {path:'AdminProfile', component: AdminProfilePageComponent, children:
    [
        {path:'', redirectTo: '/AdminProfile/CreatePatient', pathMatch: 'full'},
        {path:'CreatePatient', component:CreatePatientFormComponent},
        {path:'CreateDoctor', component:CreateDoctorFormComponent}
    ]},
    {path:'**', component: HomePageComponent}
];

export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);