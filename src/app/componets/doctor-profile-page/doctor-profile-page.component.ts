import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Params}  from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { faPlus, faTable } from '@fortawesome/free-solid-svg-icons';
import {TableInfo} from '../../models/tableInfo';
import { RequestService } from 'src/app/services/request.service';
import { DoctorResponse } from 'src/app/models/doctor';

import {AppState} from '../../store';
import {Store} from '@ngrx/store';
import * as fromActions from '../../store/app.actions';

@Component({
  selector: 'app-doctor-profile-page',
  templateUrl: './doctor-profile-page.component.html',
  styleUrls: ['./doctor-profile-page.component.css']
})
export class DoctorProfilePageComponent implements OnInit {

  faPlus = faPlus;
  faTable = faTable;

  public doctor:DoctorResponse = {};

  public speciality: string ="";
  public subSpeciality: string ="";


  constructor(
    private _requestService: RequestService,
    private _route: ActivatedRoute,
    private store: Store<AppState>
  ) { 
  }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
      this.getDoctor(params["id"]);
    });
  }

  getDoctor(id:any){
    this._requestService.getDoctorById(id).subscribe(
      (result:DoctorResponse)=>{
        this.doctor = result;
        console.log(result);
        this.store.dispatch(fromActions.loadDoctorSuccess({doctor:result}));
      },
      error =>{
        console.log(error);
      }
    );
  }

}
