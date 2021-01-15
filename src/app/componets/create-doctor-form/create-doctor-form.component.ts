import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators, FormControl} from '@angular/forms'

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

import {confirmPassword} from '../../Validations/validators';
import { DoctorRequest } from 'src/app/models/doctor';
import { RequestService } from 'src/app/services/request.service';
import { SpecialityResponse, SubSpecialityResponse } from 'src/app/models/speciality';

@Component({
  selector: 'app-create-doctor-form',
  templateUrl: './create-doctor-form.component.html',
  styleUrls: ['./create-doctor-form.component.css']
})
export class CreateDoctorFormComponent implements OnInit {

  public form: FormGroup;
  public submited: boolean;

  @ViewChild("speciality") specialityRef:any;
  @ViewChild("subSpeciality") subSpecialityRef:any;

  public specialities: SpecialityResponse[];
  public subSpecialities: SubSpecialityResponse[];
  constructor(
    private fb:FormBuilder,
    private dialog: MatDialog,
    private _requestService: RequestService
    ) {
    this.form = this.formInit();
    this.submited = false;

    this.specialities = []
    this.subSpecialities = []
    this.getSpeciality();
  }

  ngOnInit(): void {
  }

  formInit(): FormGroup{

    return this.fb.group({
      firstName: new FormControl('',{validators:[ Validators.required]}),
      lastName: new FormControl('',{validators:[ Validators.required]}),
      sex: new FormControl('',{validators:[ Validators.required]}),
      birthDate : new FormControl('',{validators:[ Validators.required]}),
      id : new FormControl('',{validators:[ Validators.required, Validators.min(10000000000), Validators.max(99999999999)]}),
      speciality: new FormControl('',{validators:[]}),
      subSpeciality: new FormControl('',{validators:[ ]}),
      userName: new FormControl('',{validators:[ Validators.required]}),
      email: new FormControl('',{validators:[]}),
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

      const {firstName, lastName, sex, birthDate, id, speciality, subSpeciality, userName, password} = this.form.value;

      var doctor:DoctorRequest = {nombre: firstName, apellidos: lastName, sexo: sex, fecha_nacimiento: this.formatDate(birthDate),
      cedula:id, especialidad: speciality, sub_especialidad: subSpeciality, username: userName, password: password} ;

      console.log(doctor);

      this._requestService.saveDoctor(doctor).subscribe(
        result =>{
          console.log(result);
          const dialogRef = this.dialog.open(DialogComponent, {data: {title: "Saved", 
              content:`Doctor user was saved!`}, width: '400px'});
        },
        error =>{
          console.log(error);
          const dialogRef = this.dialog.open(DialogComponent, {data: {title: "Error", 
              content:`Server error!`}, width: '400px'});
        }
      );

      this.submited = false;
    }
  }

  getSpeciality(){
    this._requestService.getSpecialities().subscribe(
      (result:SpecialityResponse[])=>{
        this.specialities = result;
      },
      error=>{
        console.log(error);
      }
    );

    this._requestService.getSubSpecialities().subscribe(
      (result:SubSpecialityResponse[])=>{
        this.subSpecialities = result;
      },
      error=>{
        console.log(error);
      }
    );
  }

  OnCancel(){
    this.form = this.formInit();
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
