import { Component, Inject } from '@angular/core';
import { Address } from '../../models/address.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddressEditComponent } from '../address-edit/address-edit.component';
import { ModalPopupBase } from '../../models/modal-popup-base.model';

@Component({
  selector: 'address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent  {

  list = new Array<Address>();  
  columns: string[] = ['id', 'country', 'state', 'city', 'district', 'address', 'type', 'status', 'primary', 'actions'];
  displayedColumns: string[] = ['id', 'Country', 'State', 'City', 'District', 'Address', 'Address Type', 'Status', 'Primary', 'Actions'];
  dataSource: MatTableDataSource<Address>;

  dialogData: ModalPopupBase = {
    title:"Address Edit",
    value:{}
  }
  dialogComponent =  AddressEditComponent;

  constructor(public dialogRef: MatDialogRef<AddressEditComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    
  }

}
