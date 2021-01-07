import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-admin-profile-page',
  templateUrl: './admin-profile-page.component.html',
  styleUrls: ['./admin-profile-page.component.css']
})
export class AdminProfilePageComponent implements OnInit {

  public form: string;
  constructor() { 
    this.form = "Patient";
  }

  ngOnInit(): void {
  }

  onFormChange(formString: string){
    this.form = formString;
  }

}
