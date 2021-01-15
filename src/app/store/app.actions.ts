import { createAction, props } from '@ngrx/store';
import {PatientResponse} from '../models/patient'
import { DoctorResponse } from '../models/doctor';


export const loadPatientSuccess = createAction(
  '[App] patient Success',
  props<{ patient: PatientResponse }>()
);

export const loadDoctorSuccess = createAction(
  '[App] doctor Success',
  props<{ doctor: DoctorResponse }>()
);

export const loadActualPatientSearch = createAction(
  '[App] actual patinet Success',
  props<{ actualPatientSearch: number }>()
);

export const logoutSucess = createAction(
  '[App] logout Success'
);




export const loadAppsFailure = createAction(
  '[App] Load Apps Failure',
  props<{ error: any }>()
);
