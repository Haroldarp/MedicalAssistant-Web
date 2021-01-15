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
    
   
  }

  ngOnInit(): void {
  }

}
