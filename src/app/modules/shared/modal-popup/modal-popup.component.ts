import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ModalData } from 'src/app/models/modal-data.model';

@Component({
  selector: 'modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {

  dataTemp;
  constructor(public dialogRef: MatDialogRef<ModalPopupComponent>,@Inject(MAT_DIALOG_DATA) public data: ModalData) {}

  add(value) {
    this.dataTemp.values.push(value);
    this.dataTemp.newValue = "";
  }

  remove(value) {
    this.dataTemp.values.splice(this.data.values.indexOf(value), 1);
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save() {
    this.data = this.dataTemp;
    return this.data;
  }

  ngOnInit() {    
    this.dataTemp = JSON.parse(JSON.stringify(this.data));
  }
}

