import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-create-patient-form',
  templateUrl: './create-patient-form.component.html',
  styleUrls: ['./create-patient-form.component.css']
})
export class CreatePatientFormComponent implements OnInit {

  public patientFrom: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.patientFrom = this.formInit();
  }

  ngOnInit(): void {
  }

  formInit():FormGroup{
    return this.fb.group({
      firstName: new FormControl('',{validators:[ Validators.required]}),
      lastName: new FormControl('',{validators:[ Validators.required]}),
      sex: new FormControl('',{validators:[ Validators.required]}),
      birthDate : new FormControl('',{validators:[ Validators.required]}),
      id : new FormControl('',{validators:[ ]}),
      tutorName: new FormControl('',{validators:[]}),
      tutorId: new FormControl('',{validators:[ ]}),
      disease: new FormControl('',{validators:[ ]})
    });
  }

  OnSubmit(){
    console.log(this.patientFrom.value);
  }

}
