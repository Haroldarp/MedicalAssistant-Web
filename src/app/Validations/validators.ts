import {AbstractControl, FormGroup} from '@angular/forms';

export function confirmPassword(formGroup: FormGroup){
    if(formGroup.get('password')?.value && formGroup.get('confirmPassword')?.value){
        if(formGroup.get('password')?.value != formGroup.get('confirmPassword')?.value ){
            return {EqualPassword: true};
        }
    }
    return null;
}