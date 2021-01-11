import {AbstractControl, FormGroup} from '@angular/forms';
import * as moment from 'moment';


export function confirmPassword(formGroup: FormGroup){
    if(formGroup.get('password')?.value && formGroup.get('confirmPassword')?.value){
        if(formGroup.get('password')?.value != formGroup.get('confirmPassword')?.value ){
            return {equalPassword: true};
        }
    }
    return null;
}

export function idRequired(formGroup: FormGroup){
    var edad:number = moment().diff(formGroup?.get("birthDate")?.value, 'years');

    if(edad >= 18){
        if(!formGroup.get('id')?.value){
            return {idRequired: true};
        }
    }
    return null;
}

export function tutorNameRequired(formGroup: FormGroup){
    var edad:number = moment().diff(formGroup?.get("birthDate")?.value, 'years');

    if(edad < 18){
        if(!formGroup.get('tutorName')?.value){
            return {tutorNameRequired: true};
        }
    }
    return null;
}

export function tutorIdRequired(formGroup: FormGroup){
    var edad:number = moment().diff(formGroup?.get("birthDate")?.value, 'years');

    if(edad < 18){
        if(!formGroup.get('tutorId')?.value){
            return {tutorIdRequired: true};
        }
    }
    return null;
}