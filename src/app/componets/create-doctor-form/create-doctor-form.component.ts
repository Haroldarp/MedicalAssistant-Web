import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators, FormControl} from '@angular/forms'

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

import {confirmPassword} from '../../Validations/validators';

@Component({
  selector: 'app-create-doctor-form',
  templateUrl: './create-doctor-form.component.html',
  styleUrls: ['./create-doctor-form.component.css']
})
export class CreateDoctorFormComponent implements OnInit {

  public form: FormGroup;
  public submited: boolean;

  constructor(
    private fb:FormBuilder,
    private dialog: MatDialog
    ) {
    this.form = this.formInit();
    this.submited = false;
  }

  ngOnInit(): void {

  }

  formInit(): FormGroup{

    return this.fb.group({
      firstName: new FormControl('',{validators:[ Validators.required]}),
      lastName: new FormControl('',{validators:[ Validators.required]}),
      sex: new FormControl('',{validators:[ Validators.required]}),
      birthDate : new FormControl('',{validators:[ Validators.required]}),
      id : new FormControl('',{validators:[ Validators.required]}),
      speciality: new FormControl('',{validators:[]}),
      subSpeciality: new FormControl('',{validators:[ ]}),
      userName: new FormControl('',{validators:[ Validators.required]}),
      email: new FormControl('',{validators:[ Validators.required]}),
      password: new FormControl('',{validators:[ Validators.required]}),
      confirmPassword: new FormControl('',{validators:[ Validators.required]})
    }, {validators: confirmPassword });

  }

  OnSubmit(){
    this.submited = true;
    console.log(this.form.value);

    if(this.form.invalid){
      const dialogRef = this.dialog.open(DialogComponent, {data: {title: "Error", 
      content:`Missing fields or validation errors!`}, width: '400px'});

    }else{
      const dialogRef = this.dialog.open(DialogComponent, {data: {title: "Saved", 
              content:`Doctor user was saved!`}, width: '400px'});
    }
  }

}
