import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {TableInfo} from '../../models/tableInfo';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import {RequestService} from "../../services/request.service";

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
  
  constructor(private _requestService: RequestService){
    this.related = 'Patiente'

    this._requestService.getTableInfo().subscribe(
      (result:TableInfo[]) =>{
        this.dataSource = new MatTableDataSource<TableInfo>(result);
      },
      error=>{
        console.log(error);
      }
    );
    
  }

  ngOnInit(): void {
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
