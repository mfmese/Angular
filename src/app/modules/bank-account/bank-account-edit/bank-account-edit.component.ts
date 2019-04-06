import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KeyValue } from 'src/app/models/key-value';

@Component({
  selector: 'app-bank-account-edit',
  templateUrl: './bank-account-edit.component.html',
  styleUrls: ['./bank-account-edit.component.css']
})
export class BankAccountEditComponent implements OnInit {

  types = [];
  statuses: KeyValue[] = [];
  constructor(public dialogRef: MatDialogRef<BankAccountEditComponent>, @Inject(MAT_DIALOG_DATA) public data) {
   }

  ngOnInit() {

    this.types = [
      {
        'Key':'1',
        'Value': 'Şirket Hesabı'
      },
      {
        'Key':'2',
        'Value': 'Bireysel Hesap'
      },
      {
        'Key':'3',
        'Value': 'Dolar Hesabı'
      }
    ];

    this.statuses = [
      {
        'Key':'true',
        'Value':'Aktif'
      },
      {
        'Key':'false',
        'Value':'Passive'
      }
    ]

  }

  cancel(): void {
    this.dialogRef.close();
  }

}
