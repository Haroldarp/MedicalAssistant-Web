import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {TableInfo} from '../../models/tableInfo';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import {RequestService} from "../../services/request.service";
import {ActivatedRoute, Params}  from '@angular/router';
import {AppState, selectPatient, selectDoctor} from '../../store';
import {Store, select} from '@ngrx/store';
import * as fromActions from '../../store/app.actions';
import { PatientResponse } from 'src/app/models/patient';
import { DoctorResponse } from 'src/app/models/doctor';
import { ConsultationResponse } from 'src/app/models/consultation';


@Component({
  selector: 'app-consultation-table',
  templateUrl: './consultation-table.component.html',
  styleUrls: ['./consultation-table.component.css']
})
export class ConsultationTableComponent implements OnInit {

  faFilePdf = faFilePdf;

  public displayedColumns: string[] = ['id', 'title', 'description', 'related', 'archiveLink', 'date'];
  public dataSource:any;
  public related:string;

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  public patient?: PatientResponse = undefined;
  public doctor?: DoctorResponse = undefined;
  
  constructor(
    private _requestService: RequestService,
    private _route: ActivatedRoute,
    private store: Store<AppState>
    ){
    this.related = 'Patiente'

    this._requestService.getTableInfo().subscribe(
      (result:TableInfo[]) =>{
        console.log(result);
        this.dataSource = new MatTableDataSource<TableInfo>(result);
      },
      error=>{
        console.log(error);
      }
    );

    this.store.pipe(select(selectPatient)).subscribe(
      result =>{ 
        console.log(result);
        this.patient = result;
        if(this.patient != undefined){
          this.related = 'Doctor'
          this._requestService.getConsultationByPatientId(result?.id).subscribe(
            (result: ConsultationResponse[]) =>{
              console.log(result);
              var data: TableInfo[] = []
              result.forEach(element => data.push(new TableInfo(element, false)));

              this.dataSource = new MatTableDataSource<TableInfo>(data);
            },error=>{
              console.log(error);
            }
          );
        }
      }
    );

    this.store.pipe(select(selectDoctor)).subscribe(
      result =>{ 
        console.log(result);
        this.doctor = result;
        if(this.doctor != undefined){
          this.related = 'Patient'
          this._requestService.getConsultationByDoctortId(result?.id).subscribe(
            (result: ConsultationResponse[]) =>{
              console.log(result);
              var data: TableInfo[] = []
              result.forEach(element => data.push(new TableInfo(element, true)));

              this.dataSource = new MatTableDataSource<TableInfo>(data);
            },error=>{
              console.log(error);
            }
          );
        }
      }
    );
    
  }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
      console.log(params["id"]);
    });
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
