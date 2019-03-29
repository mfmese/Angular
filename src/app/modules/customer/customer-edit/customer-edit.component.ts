import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CustomerEditValidation } from '../customer-validation/customer-edit.validation';
import { FormControl, FormBuilder } from '@angular/forms';
import { BankAccount } from '../../models/bank-account.model';
import { BankAccountListComponent } from '../../bank-account/bank-account-list/bank-account-list.component';
import { ModalCore } from 'src/app/core/helper/modal.core';
import { ModalPopup } from '../../models/modal-popup.model';
import { ModalPopupComponent } from '../../shared/modal-popup/modal-popup.component';
import { ModalPopupType } from 'src/app/core/models/modal-popup-type';
import { Address } from '../../models/address.model';
import { AddressListComponent } from '../../address/address-list/address-list.component';
import { KeyValue } from 'src/app/core/models/key-value';

@Component({
  selector: 'customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerId = 1;
  form: any;

  titleControl = new FormControl();
  titleFiltered: Observable<KeyValue[]>;  
  titles: KeyValue[] =  [
    {Key:'1', Value:'Engineer'}, 
    {Key:'2', Value:'Operator'}
  ]; 

  performances: KeyValue[] = [
    {Key:"1", Value:"Çok İyi"},
    {Key:"2", Value:"İyi"},
    {Key:"3", Value:"Orta"},
    {Key:"4", Value:"Geçer"},
    {Key:"5", Value:"Kötü"},
  ]
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {}
  
  ngOnInit() {
    this.form = new CustomerEditValidation(this.formBuilder).validators;

    this.titleFiltered = this._filtered(this.titleControl,this.titles);
  }

  private _filtered(control: FormControl, list: KeyValue[]): Observable<KeyValue[]>{
    return control.valueChanges
      .pipe(
        startWith(''),
        map(value => value ? this._filter(value, list) : list.slice())
      );
  }

  private _filter(value: string, list: KeyValue[]): KeyValue[] {
    const filterValue = value.toLowerCase();
    return list.filter(option => option.Value.toLowerCase().indexOf(filterValue) === 0);
  }
  
  phoneNumbers = ["05547426009", "055474264509"];
  primaryPhoneNumber;
  openPhoneNumberDialog(): void {
    let data: ModalPopup = {
      title:"Edit Phone Number",
      placeHolder:"Phone Number",
      values:this.phoneNumbers,
      value: this.primaryPhoneNumber
    }
    ModalCore.open(this.dialog, ModalPopupComponent,data )
    .subscribe(result => {
      if(result !== undefined){
        this.primaryPhoneNumber = result.value;
        this.phoneNumbers = result.values;
      }      
    });
  }

  emails = ["f@gmail.com", "jm@gmail.com"];
  primaryEmail;
  openEmailDialog(): void {
    let data: ModalPopup = {
      title:"Edit Email",
      placeHolder:"Email",
      values:this.emails,
      value: this.primaryEmail
    }
    ModalCore.open(this.dialog, ModalPopupComponent, data)
    .subscribe(result => {
      if(result !== undefined){
        this.emails = result.value;
        this.primaryEmail = result.values;
      }      
    });
  }

  bankAccounts: BankAccount[];
  primaryBankAccount: BankAccount;
  openBankAccountDialog(): void {
    let data = {
      title: "Bank Accounts",
      values:this.bankAccounts,
      customerId:this.customerId,
    }
    ModalCore.open(this.dialog, BankAccountListComponent, data, ModalPopupType.Grid)
    .subscribe(result => {
      if(result !== undefined){
        this.bankAccounts = result;
        this.primaryBankAccount = this.bankAccounts.find(x => x.primary === true);
      }      
    });
  }

  addresses: Address[];
  primaryAddress: Address;
  openAddressDialog(): void {
    let data = {
      title: "Address",
      values:this.addresses,
      customerId:this.customerId,
    }
    ModalCore.open(this.dialog, AddressListComponent, data, ModalPopupType.Grid)
    .subscribe(result => {
      console.log(result);
      if(result !== undefined){
        this.addresses = result;
        this.primaryAddress = this.addresses.find(x => x.primary === true);
      }      
    });
  }

}
