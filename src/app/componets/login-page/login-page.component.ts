import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormGroup, FormBuilder, Validator, Validators, FormControl} from '@angular/forms';

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

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
    private dialog: MatDialog
  ) {
      this.form = this.formInit();
      this.submited = false;
   }

  ngOnInit(): void {
  }

  OnLogin(){
    this.submited = true;
    console.log(this.form.value);
    
    if(this.form.invalid){
      const dialogRef = this.dialog.open(DialogComponent, {data: {title: "Error", 
      content:`Missing fields or validation errors!`}, width: '400px'});
    }else{
      this._router.navigate(['/DoctorProfile/Table']);
    }
  }

  formInit():FormGroup{
    return this.fb.group({
      userName: new FormControl('',{validators:[ Validators.required]}),
      password: new FormControl('',{validators:[ Validators.required]})});
  }

}
