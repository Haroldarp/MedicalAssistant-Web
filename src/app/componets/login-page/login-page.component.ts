import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormGroup, FormBuilder, Validator, Validators, FormControl} from '@angular/forms';

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { RequestService } from 'src/app/services/request.service';
import { UserRequest } from 'src/app/models/userRequest';
import { PatientResponse } from 'src/app/models/patient';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;
  public submited: boolean;

  constructor(
    private _router:Router,
    private fb:FormBuilder,
    private dialog: MatDialog,
    private _requestService: RequestService
  ) {
      this.form = this.formInit();
      this.submited = false;

      // this._requestService.getPatientById("1").subscribe(
      //   (result:PatientResponse)=>{
      //     console.log(result);
      //   },
      //   error =>{
      //     console.log(error);
      //   }
      // );

      // this._requestService.logout().subscribe(
      //   result=>{
      //     console.log(result);
      //   },
      //   error =>{
      //     console.log(error);
      //   }
      // );

      // const Http = new XMLHttpRequest();
      // const url='https://enigmatic-lowlands-64538.herokuapp.com/patients/1';
      // Http.open("GET", url);
      // Http.send();

      // Http.onreadystatechange = (e) => {
      //   console.log(Http.responseText)
      // }
   }

  ngOnInit(): void {
  }

  OnLogin(){
    this.submited = true;
    
    var user = new UserRequest(this.form.value);
    
    if(this.form.invalid){
     
      const dialogRef = this.dialog.open(DialogComponent, {data: {title: "Error", 
      content:`Missing fields or validation errors!`}, width: '400px'});
      
    }else{

      this.form.disable();

      this._requestService.login(user).subscribe(
        result =>{
          switch (result["tipo_usuario"]) {
            case 4:
              this._router.navigate(['/DoctorProfile/Table']);
              break;

            case 3:
              this._router.navigate(['/PatientProfile/Table']);
              break;

            case 1:
              console.log(result);
              this._router.navigate(['/AdminProfile/CreatePatient']);
              break;

            default:
              break;
          }
          this.form.enable();

        },

        error =>{
          console.log(error);
          this.form.enable();

          const dialogRef = this.dialog.open(DialogComponent, {data: {title: "Login error", 
          content:`Wrong username or password!`}, width: '400px'});
        }
      );
    }

  }

  formInit():FormGroup{
    return this.fb.group({
      userName: new FormControl('',{validators:[ Validators.required]}),
      password: new FormControl('',{validators:[ Validators.required]})});
  }

 

}
