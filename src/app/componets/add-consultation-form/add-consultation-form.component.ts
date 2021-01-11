import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators, FormControl} from '@angular/forms'

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-add-consultation-form',
  templateUrl: './add-consultation-form.component.html',
  styleUrls: ['./add-consultation-form.component.css']
})
export class AddConsultationFormComponent implements OnInit {

  public form: FormGroup;
  public submited: boolean;
  public fileName:string ;

  constructor(
    private fb:FormBuilder,
    private dialog: MatDialog
  ) { 
    this.form = this.formInit();
    this.submited = false;
    this.fileName = "Choose file";
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
      const dialogRef = this.dialog.open(DialogComponent, {data: {title: "Saved", 
              content:`Consultation was saved!`}, width: '400px'});
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
      this.form.patchValue({
            file: file
      });
      
      // console.log("yes");
      // console.log(file.name);
      
      // console.log(file);
      // console.log(event.target.files[0]);
      
      // reader.readAsDataURL(file);
      // reader.onload = () => {
      //   this.form.patchValue({
      //     file: reader.result
      //  });
      // };
    }
  }

}
