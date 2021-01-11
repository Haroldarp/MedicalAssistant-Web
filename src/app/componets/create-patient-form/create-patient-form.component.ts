import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators, FormControl} from '@angular/forms'

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

import {confirmPassword, idRequired, tutorIdRequired, tutorNameRequired} from '../../Validations/validators';

import * as moment from 'moment';


@Component({
  selector: 'app-create-patient-form',
  templateUrl: './create-patient-form.component.html',
  styleUrls: ['./create-patient-form.component.css']
})
export class CreatePatientFormComponent implements OnInit {

  public form: FormGroup;
  public submited: boolean;
  public isAdult?: boolean;


  constructor(
    private fb:FormBuilder,
    private dialog: MatDialog) 
    { 
      this.form = this.formInit();
      this.submited = false;
    }

  ngOnInit(): void {
  }

  formInit():FormGroup{
    var formRef:any =  this.fb.group({
      firstName: new FormControl('',{validators:[ Validators.required]}),
      lastName: new FormControl('',{validators:[ Validators.required]}),
      sex: new FormControl('',{validators:[ Validators.required]}),
      birthDate : new FormControl('',{validators:[ Validators.required]}),
      id : new FormControl('',{validators:[Validators.min(10000000000), Validators.max(99999999999) ]}),
      tutorName: new FormControl('',{validators:[]}),
      tutorId: new FormControl('',{validators:[ Validators.min(10000000000), Validators.max(99999999999)]}),
      disease: new FormControl('',{validators:[ ]}),
      userName: new FormControl('',{validators:[ Validators.required]}),
      email: new FormControl('',{validators:[ Validators.required]}),
      password: new FormControl('',{validators:[ Validators.required]}),
      confirmPassword: new FormControl('',{validators:[ Validators.required]})
    }, {validators: [confirmPassword, idRequired, tutorNameRequired, tutorIdRequired]});

    formRef?.get("id")?.disable();
    formRef?.get("tutorName")?.disable();
    formRef?.get("tutorId")?.disable();

    return formRef;
  }

  OnSubmit(){
    this.submited = true;
    console.log(this.form?.value);
    console.log(this.form?.errors);

    if(this.form?.invalid){
      const dialogRef = this.dialog.open(DialogComponent, {data: {title: "Error", 
      content:`Missing fields or validation errors!`}, width: '400px'});
      
    }else{
      const dialogRef = this.dialog.open(DialogComponent, {data: {title: "Saved", 
      content:`Doctor user was saved!`}, width: '400px'});
      this.submited = false;
    }
  }

  OnCancel(){
    this.form = this.formInit();
  }

  OnDateChange(){
    var edad:number = moment().diff(this.form?.get("birthDate")?.value, 'years');
    if(edad >= 18){
      this.isAdult = true;
      this.form?.get("tutorName")?.disable();
      this.form?.get("tutorId")?.disable();
      this.form?.get("tutorName")?.setValue("");
      this.form?.get("tutorId")?.setValue("");

      this.form?.get("id")?.enable();

    }else{
      this.isAdult = false;
      this.form?.get("id")?.disable();
      this.form?.get("id")?.setValue("");


      this.form?.get("tutorName")?.enable();
      this.form?.get("tutorId")?.enable();
    }
  }

}
