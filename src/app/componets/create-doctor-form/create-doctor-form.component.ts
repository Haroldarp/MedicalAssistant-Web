import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators, FormControl} from '@angular/forms'


@Component({
  selector: 'app-create-doctor-form',
  templateUrl: './create-doctor-form.component.html',
  styleUrls: ['./create-doctor-form.component.css']
})
export class CreateDoctorFormComponent implements OnInit {

  public doctorFrom: FormGroup;

  constructor(private fb:FormBuilder) {
    this.doctorFrom = this.formInit();
  }

  ngOnInit(): void {

  }

  formInit(): FormGroup{

    return this.fb.group({
      firstName: new FormControl('',{validators:[ Validators.required]}),
      lastName: new FormControl('',{validators:[ Validators.required]}),
      sex: new FormControl('',{validators:[ Validators.required]}),
      birthDate : new FormControl('',{validators:[ Validators.required]}),
      id : new FormControl('',{validators:[ ]}),
      speciality: new FormControl('',{validators:[]}),
      subSpeciality: new FormControl('',{validators:[ ]})
    });

  }

  OnSubmit(){
    console.log(this.doctorFrom.value);
  }

}
