import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  public baseUrl: string;
  constructor(
    public _http: HttpClient
  ) { 
    this.baseUrl = "";
  }

}
