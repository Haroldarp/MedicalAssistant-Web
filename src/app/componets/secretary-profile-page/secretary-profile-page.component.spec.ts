import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryProfilePageComponent } from './secretary-profile-page.component';

describe('SecretaryProfilePageComponent', () => {
  let component: SecretaryProfilePageComponent;
  let fixture: ComponentFixture<SecretaryProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaryProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaryProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
