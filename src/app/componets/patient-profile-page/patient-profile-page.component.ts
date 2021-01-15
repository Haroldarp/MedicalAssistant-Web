import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {ActivatedRoute, Params}  from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {TableInfo} from '../../models/tableInfo';
import { RequestService } from 'src/app/services/request.service';
import { PatientResponse } from 'src/app/models/patient';
import {AppState} from '../../store';
import {Store} from '@ngrx/store';
import * as fromActions from '../../store/app.actions';

@Component({
  selector: 'app-patient-profile-page',
  templateUrl: './patient-profile-page.component.html',
  styleUrls: ['./patient-profile-page.component.css']
})
export class PatientProfilePageComponent implements OnInit{

  public patient:PatientResponse = {};

  constructor(
    private _requestService: RequestService,
    private _route: ActivatedRoute,
    private store: Store<AppState>
  ) { 

  }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
      this.getPatient(params["id"]);
    });
  }

  getPatient(id:any){
    this._requestService.getPatientById(id).subscribe(
      (result:PatientResponse)=>{
        this.patient = result;
        this.store.dispatch(fromActions.loadPatientSuccess({patient:result}));
      },
      error =>{
        console.log(error);
      }
    );
  }

}
