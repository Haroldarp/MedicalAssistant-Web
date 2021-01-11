import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import {TableInfo} from '../models/tableInfo';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  public baseUrl: string;
  constructor(public _http: HttpClient) { 
    this.baseUrl = "";
  }

  getTableInfo():Observable<TableInfo[]>{
    return of<TableInfo[]>(
      [
        new TableInfo({id: 1, title: 'titulo 1', description: 'description sjdvhbskjbdkjdksbdns jhs skj havs gvsj dsyb sdvh jbsd h jsvhdb sjvhd shvsd sjdhv sdj gc 1', patient: 'patient name 1', archiveLink: 'archiveLink 1', date: new Date()}),
        new TableInfo({id: 2, title: 'titulo 2', description: 'description 2', patient: 'patient name 2', archiveLink: 'archiveLink 2', date: new Date()}),
        new TableInfo({id: 3, title: 'titulo 3', description: 'description 3', doctor: 'patient name 3', archiveLink: 'archiveLink 3', date: new Date()}),
        new TableInfo({id: 4, title: 'titulo 4', description: 'description 4', doctor: 'patient name 4', archiveLink: 'archiveLink 4', date: new Date()}),
        new TableInfo({id: 5, title: 'titulo 5', description: 'description 5', doctor: 'patient name 5', archiveLink: 'archiveLink 5', date: new Date()}),
        new TableInfo({id: 6, title: 'titulo 6', description: 'description 6', patient: 'patient name 6', archiveLink: 'archiveLink 6', date: new Date()}),
        new TableInfo({id: 7, title: 'titulo 7', description: 'description 7', patient: 'patient name 7', archiveLink: 'archiveLink 7', date: new Date()}),
        new TableInfo({id: 8, title: 'titulo 8', description: 'description 8', patient: 'patient name 8', archiveLink: 'archiveLink 8', date: new Date()}),
        new TableInfo({id: 9, title: 'titulo 9', description: 'description 9', patient: 'patient name 9', archiveLink: 'archiveLink 9', date: new Date()}),
        new TableInfo({id: 10, title: 'titulo 10', description: 'description 10', patient: 'patient name 10', archiveLink: 'archiveLink 10', date: new Date()})
      ]
    );
  }

  login():Observable<any>{
    return of();
  }

  getUserById():Observable<any>{
    return of();
  }

}
