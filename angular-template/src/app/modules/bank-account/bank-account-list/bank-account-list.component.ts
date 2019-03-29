import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { BankAccount } from '../../models/bank-account.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BankAccountEditComponent } from '../bank-account-edit/bank-account-edit.component';
import { ModalPopupBase } from '../../models/modal-popup-base.model';

@Component({
  selector: 'bank-account-list',
  templateUrl: './bank-account-list.component.html',
  styleUrls: ['./bank-account-list.component.css']
})
export class BankAccountListComponent implements OnInit{
 
  list = new Array<BankAccount>();  
  columns: string[] = ['id', 'customerName', 'accountName', 'bankName', 'bankBranch', 'accountNumber', 'ibanNumber', 'type', 'status', 'primary', 'actions'];
  displayedColumns: string[] = ['id', 'Customer Name', 'Account Name', 'Bank Name', 'Bank Branch', 'Account Number', 'Iban Number', 'Account Type', 'Status', 'Primary Account', 'Actions'];
  dataSource: MatTableDataSource<BankAccount>;

  dialogData: ModalPopupBase = {
    title:"Bank Account Edit",
    value:{}
  }
  dialogComponent =  BankAccountEditComponent;

  constructor(public dialogRef: MatDialogRef<BankAccountEditComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    this.getCurrentBankAccounts();
  }

  getCurrentBankAccounts(): BankAccount[] {

    return [{
      id: 1,
      customerName: "customerName",
      accountName: "accountName",
      bankName: "bankName",
      bankBranch: "bankBranch",
      accountNumber: "accountNumber",
      ibanNumber: "ibanNumber",
      type: { Key: "1", Value: "Şirket Hesabı" },
      status: { Key: "true", Value: "Active", },
      primary: true
    }];
  }

}
