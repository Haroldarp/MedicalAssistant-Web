import { Component, OnInit } from '@angular/core';
import {faCircle, faEnvelope, faPhone, faClock, faCloudUploadAlt, faUserInjured} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  faCircle = faCircle;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faClock = faClock;
  faCloudUploadAlt = faCloudUploadAlt;
  faUserInjured = faUserInjured;

  public date:any;

  constructor() {
    this.date = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
