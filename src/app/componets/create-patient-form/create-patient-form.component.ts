import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators, FormControl} from '@angular/forms'

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

import {confirmPassword, idRequired, tutorIdRequired, tutorNameRequired} from '../../Validations/validators';

import * as moment from 'moment';
import { RequestService } from 'src/app/services/request.service';
import { PatientRequest } from 'src/app/models/patient';


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
    private dialog: MatDialog,
    private _requestService: RequestService
    ) 
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
      email: new FormControl('',{validators:[]}),
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
    

    if(this.form?.invalid){
      const dialogRef = this.dialog.open(DialogComponent, {data: {title: "Error", 
      content:`Missing fields or validation errors!`}, width: '400px'});
      
    }else{

      var patient: PatientRequest = {
        nombre: this.form.value["firstName"],
        apellidos: this.form.value["lastName"],
        sexo: this.form.value["sex"],
        fecha_nacimiento: this.formatDate(this.form.value["birthDate"]),
        cedula: this.form.value["id"],
        nombre_tutor: this.form.value["tutorName"],
        cedula_tutor: this.form.value["tutorId"],
        username: this.form.value["userName"],
        password: this.form.value["password"],
        enfermedades: []
      }

      console.log(patient);

      this._requestService.savePatient(patient).subscribe(
        result=>{
          console.log(result);
          const dialogRef = this.dialog.open(DialogComponent, {data: {title: "Saved", 
            content:`Patient user was saved!`}, width: '400px'});
        },
        error=>{
          console.log(error);
          const dialogRef = this.dialog.open(DialogComponent, {data: {title: "Error", 
            content:`Server error!`}, width: '400px'});

        }
      )
      
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

  formatDate(date:Date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

}
