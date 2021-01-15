import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import {TableInfo} from '../models/tableInfo';
import { of } from 'rxjs';
import { UserRequest } from '../models/userRequest';
import { PatientResponse, PatientRequest, PatientResponseSearch } from '../models/patient';
import { DoctorResponse, DoctorRequest } from '../models/doctor';
import { ConsultationRequest, ConsultationResponse } from '../models/consultation';
import { CookieService } from 'ngx-cookie-service';
import { SpecialityResponse, SubSpecialityResponse } from '../models/speciality';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  public baseUrl: string;
  constructor(public _http: HttpClient,
    private cookieService: CookieService) { 
    this.baseUrl = "https://enigmatic-lowlands-64538.herokuapp.com";
  }

  getTableInfo():Observable<TableInfo[]>{
    return of<TableInfo[]>(
      []
    );
  }

  login(user: UserRequest):Observable<any>{
    let params = JSON.stringify(user);

    let headers = new HttpHeaders()
    .set('Content-Type','application/json');

    return this._http.post(`${this.baseUrl}/login` , params, {headers: headers} );
  }

  logout():Observable<any>{
    let headers = new HttpHeaders()
    .set('Content-Type','application/json');

    return this._http.post(`${this.baseUrl}/logout` , {headhers: headers});
  }


  getPatientsByUsername(username:any):Observable<PatientResponseSearch[]>{
    console.log(`${this.baseUrl}/search_patients/${username}`);
    
    let params = JSON.stringify({searchText: username});

    let headers = new HttpHeaders()
    .set('Content-Type','application/json');

    return this._http.post<PatientResponseSearch[]>(`${this.baseUrl}/search_patients`,params, {headers: headers} )
  }

  getPatientById(idPatient:any):Observable<PatientResponse>{
    console.log(`${this.baseUrl}/patients/${idPatient}`);
    return this._http.get<PatientResponse>(`${this.baseUrl}/patients/${idPatient}`, {withCredentials: true} )
    
  }

  getDoctorById(idDoctor:any):Observable<any>{
    console.log(`${this.baseUrl}/doctors/${idDoctor}`);
    return this._http.get<DoctorResponse>(`${this.baseUrl}/doctors/${idDoctor}`, {withCredentials: true} )
  }

  getConsultationByPatientId(idPatient:any):Observable<ConsultationResponse[]>{
    console.log(`${this.baseUrl}/checkups/patient/${idPatient}`);
    return this._http.get<ConsultationResponse[]>(`${this.baseUrl}/checkups/patient/${idPatient}`, {withCredentials: true} )
  }

  getConsultationByDoctortId(idDoctor:any):Observable<ConsultationResponse[]>{
    console.log(`${this.baseUrl}/checkups/doctor/${idDoctor}`);
    return this._http.get<ConsultationResponse[]>(`${this.baseUrl}/checkups/doctor/${idDoctor}`, {withCredentials: true} )
  }

  savePatient(patient:PatientRequest):Observable<any>{
    let params = JSON.stringify(patient);

    let headers = new HttpHeaders()
    .set('Content-Type','application/json');

    return this._http.post(`${this.baseUrl}/patients` , params, {headers: headers} );
  }

  saveDoctor(doctor:DoctorRequest):Observable<any>{
    let params = JSON.stringify(doctor);

    let headers = new HttpHeaders()
    .set('Content-Type','application/json');

    return this._http.post(`${this.baseUrl}/doctors` , params, {headers: headers} );
  }

  saveConsultation(consultation:ConsultationRequest):Observable<any>{
    let params = JSON.stringify(consultation);

    let headers = new HttpHeaders()
    .set('Content-Type','application/json');

    return this._http.post(`${this.baseUrl}/checkups` , params, {headers: headers} );
  }

  getSpecialities():Observable<SpecialityResponse[]>{
    console.log(`${this.baseUrl}/specialties`);
    return this._http.get<SpecialityResponse[]>(`${this.baseUrl}/specialties`, {withCredentials: true} )
  }

  getSubSpecialities():Observable<SubSpecialityResponse[]>{
    console.log(`${this.baseUrl}/subspecialties`);
    return this._http.get<SubSpecialityResponse[]>(`${this.baseUrl}/subspecialties`, {withCredentials: true} )
  }


}
