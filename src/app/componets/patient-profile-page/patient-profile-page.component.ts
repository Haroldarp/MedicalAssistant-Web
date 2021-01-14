import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {TableInfo} from '../../models/tableInfo';
import { RequestService } from 'src/app/services/request.service';
import { PatientResponse } from 'src/app/models/patient';

@Component({
  selector: 'app-patient-profile-page',
  templateUrl: './patient-profile-page.component.html',
  styleUrls: ['./patient-profile-page.component.css']
})
export class PatientProfilePageComponent implements OnInit{

  public patient:PatientResponse = {};

  constructor(
    private _requestService: RequestService
  ) { 

    // this._requestService.getPatientById(1).subscribe(
    //   (result:PatientResponse)=>{
    //     this.patient = result;
    //   },
    //   error =>{
    //     console.log(error);
    //   }
    // );


  }

  ngOnInit(): void {
    
  }

}
