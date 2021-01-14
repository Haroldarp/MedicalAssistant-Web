import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { faUserMd, faUserInjured, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { RequestService } from 'src/app/services/request.service';
import { PatientResponse } from 'src/app/models/patient';
import axios from 'axios';


@Component({
  selector: 'app-admin-profile-page',
  templateUrl: './admin-profile-page.component.html',
  styleUrls: ['./admin-profile-page.component.css']
})
export class AdminProfilePageComponent implements OnInit {

  faUserMd = faUserMd;
  faUserInjured = faUserInjured;
  faUserTie = faUserTie;

  public patient:PatientResponse = {};


  constructor(
    private _requestService: RequestService
  ) {
    this._requestService.getPatientById("1").subscribe(
      (result:PatientResponse)=>{
        this.patient = result;
      },
      error =>{
        console.log(error);
      }
    );

    // axios.get(`https://enigmatic-lowlands-64538.herokuapp.com/patients/1`,{withCredentials: true})
    //   .then(res => {
    //     console.log(res);
    //   })
   
  }

  ngOnInit(): void {
  }

}
