import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  faUser = faUser;
  
  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  OnLogin(){
    this._router.navigate(['/DoctorProfile']);
  }

}
