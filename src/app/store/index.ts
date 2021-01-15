import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { PatientResponse } from '../models/patient';
import { DoctorResponse } from '../models/doctor';
import {loadPatientSuccess, loadDoctorSuccess, loadActualPatientSearch} from './app.actions'

export const appStateFeatureKey = 'appState';

export interface AppState {
  patient?: PatientResponse,
  doctor?: DoctorResponse,
  actualPatientSearch: any
}

export const initialState: AppState ={
  patient: undefined,
  doctor: undefined,
  actualPatientSearch: undefined
}

export const reducers = createReducer(
  initialState,
  on(loadPatientSuccess, (state, action) =>{
    return {
      doctor: state?.doctor,
      patient: action?.patient,
      actualPatientSearch: state?.actualPatientSearch
    } 
      
  }),
  on(loadDoctorSuccess, (state, action) =>{
    return {
      doctor: action?.doctor,
      patient: state?.patient,
      actualPatientSearch: state?.actualPatientSearch
    } 
      
  }),
  on(loadActualPatientSearch, (state, action) =>{
    return {
      doctor: state?.doctor,
      patient: state?.patient,
      actualPatientSearch: action?.actualPatientSearch
    } 
      
  }),
  on(loadActualPatientSearch, (state, action) =>{
    return {
      doctor: undefined,
      patient: undefined,
      actualPatientSearch: undefined
    } 
      
  })
)

export const selectAppStateFeature = createFeatureSelector<AppState>(
  appStateFeatureKey
);

export const selectPatient = createSelector(
  selectAppStateFeature,
  (state: AppState) => state.patient
);

export const selectDoctor = createSelector(
  selectAppStateFeature,
  (state: AppState) => state.doctor
);

export const selectAll = createSelector(
  selectAppStateFeature,
  (state: AppState) => state
);

export const selectactualPatientSearch = createSelector(
  selectAppStateFeature,
  (state: AppState) => state.actualPatientSearch
);




export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
