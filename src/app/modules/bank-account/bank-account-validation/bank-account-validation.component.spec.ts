import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountValidationComponent } from './bank-account-validation.component';

describe('BankAccountValidationComponent', () => {
  let component: BankAccountValidationComponent;
  let fixture: ComponentFixture<BankAccountValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccountValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
