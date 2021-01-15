import { Component, OnInit, Input } from '@angular/core';
import { faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {FormGroup, FormBuilder, Validator, Validators, FormControl} from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';
import {AppState, selectPatient, selectDoctor} from '../../store';
import {Store, select} from '@ngrx/store';
import * as fromActions from '../../store/app.actions';
import { PatientResponse } from 'src/app/models/patient';
import { DoctorResponse } from 'src/app/models/doctor';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() SearchBar:boolean;
  faSignOutAlt = faSignOutAlt;
  faSearch = faSearch;

  public username: any = "";

  public control = new FormControl();
  public form: FormGroup;
  public filteredPatients: Observable<any[]>;

  constructor(
    private fb:FormBuilder,
    private _requestService: RequestService,
    private _router:Router,
    private store: Store<AppState>

  ) {
    this.SearchBar = true;

    this.form = this.formInit();

    this.filteredPatients = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    
  }

  ngOnInit(): void {
    this.store.pipe(select(selectPatient)).subscribe(
      result =>{ 
        if(result != undefined){
          this.SearchBar = false;
        }
      },
      error =>{

      }
    )
  }

  onLogout(){
    this._requestService.logout().subscribe(
      result =>{
        console.log(result);
        this.store.dispatch(fromActions.logoutSucess());
        this._router.navigate(['/Login']);
      },
      error=>{
        console.log(error);
      }
    );
  }

  private _filter(value: string): any[] {
    return [{id:1, value:"diego"},{id:2, value:"maria"},{id:3, value:"marcos"},{id:4, value:"maria"}];
  }


  formInit():FormGroup{
    return this.fb.group({
      username: new FormControl('',{validators:[ Validators.required]})});
  }

  onSearch(){
    console.log(this.form.value);
  }

  displayFn(auto:any): string {
    console.log(auto);
      return auto ? auto.value : auto;
  }


}
