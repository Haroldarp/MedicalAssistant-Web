import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators, FormControl} from '@angular/forms'

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { RequestService } from 'src/app/services/request.service';
import { ConsultationRequest } from 'src/app/models/consultation';

import {AppState, selectPatient, selectDoctor} from '../../store';
import {Store, select} from '@ngrx/store';
import * as fromActions from '../../store/app.actions';

@Component({
  selector: 'app-add-consultation-form',
  templateUrl: './add-consultation-form.component.html',
  styleUrls: ['./add-consultation-form.component.css']
})
export class AddConsultationFormComponent implements OnInit {

  public form: FormGroup;
  public submited: boolean;
  public fileName:string ;

  public doctorId: any;

  constructor(
    private fb:FormBuilder,
    private dialog: MatDialog,
    private _requestService: RequestService,
    private store: Store<AppState>

  ) { 
    this.form = this.formInit();
    this.submited = false;
    this.fileName = "Choose file";

    this.store.pipe(select(selectDoctor)).subscribe(
      result =>{ 
        console.log("desde consultation")
        console.log(result);
        this.doctorId = result?.id;
      }
    )
  }

  ngOnInit(): void {
  }

  formInit(): FormGroup{

    return this.fb.group({
      title: new FormControl('',{validators:[ Validators.required]}),
      description: new FormControl('',{validators:[ Validators.required]}),
      patient: new FormControl('',{validators:[ Validators.required]}),
      file: new FormControl('',{validators:[ Validators.required]}),
    });

  }

  OnSubmit(){
    this.submited = true;
    console.log(this.form.value);

    if(this.form.invalid){
      const dialogRef = this.dialog.open(DialogComponent, {data: {title: "Error", 
      content:`Missing fields or validation errors!`}, width: '400px'});

    }else{
      const {title, description, patient, file} = this.form.value;
      var consultation: ConsultationRequest = {titulo: title, descripcion:description, 
        paciente: patient, archivo: file, fecha: this.formatDate(new Date()), doctor: this.doctorId};


      this._requestService.saveConsultation(consultation).subscribe(
        result =>{
          console.log(result);
          const dialogRef = this.dialog.open(DialogComponent, {data: {title: "Saved", 
          content:`Consultation was saved!`}, width: '400px'});
        },
        error =>{
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
    this.fileName = "Choose file";
  }

  onFileChange(event:any) {
    const reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.fileName = file.name;
      
      
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.patchValue({
          file: reader.result
       });
      };
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
