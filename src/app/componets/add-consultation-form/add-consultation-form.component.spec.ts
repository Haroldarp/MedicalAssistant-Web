import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsultationFormComponent } from './add-consultation-form.component';

describe('AddConsultationFormComponent', () => {
  let component: AddConsultationFormComponent;
  let fixture: ComponentFixture<AddConsultationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConsultationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsultationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
