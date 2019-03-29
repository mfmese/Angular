import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KeyValue } from 'src/app/core/models/key-value';

@Component({
  selector: 'address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {

  countryControl = new FormControl();
  countryFiltered: Observable<KeyValue[]>;  
  countries: KeyValue[] =  [
    {Key:'1', Value:'Turkey'}, 
    {Key:'2', Value:'USA'}
  ];  

  stateControl = new FormControl();
  stateFiltered: Observable<KeyValue[]>;  
  states: KeyValue[] =  [
    {Key:'1', Value:'Ege'}, 
    {Key:'2', Value:'Marmara'}
  ]; 

  cityControl = new FormControl();
  cityFiltered: Observable<KeyValue[]>;  
  cities: KeyValue[] =  [
    {Key:'1', Value:'Istanbul'}, 
    {Key:'2', Value:'Ankara'}
  ]; 

  districtControl = new FormControl();
  districtFiltered: Observable<KeyValue[]>;  
  districties: KeyValue[] =  [
    {Key:'1', Value:'Çekmeköy'}, 
    {Key:'2', Value:'Kadıköy'}
  ]; 

  address: string;
  types = [];
  statuses: KeyValue[] = [];

  constructor(public dialogRef: MatDialogRef<AddressEditComponent>, @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
    // this.form = new CustomerEditValidation(this.formBuilder).validators;

    this.countryFiltered = this._filtered(this.countryControl,this.countries);
    this.stateFiltered = this._filtered(this.stateControl,this.states);
    this.cityFiltered = this._filtered(this.cityControl,this.cities);
    this.districtFiltered = this._filtered(this.districtControl,this.districties);

    this.types = [
      {
        'Key':'1',
        'Value': 'Ev Adresi'
      },
      {
        'Key':'2',
        'Value': 'Şirket Adresi'
      },
      {
        'Key':'3',
        'Value': 'Yakınına ait Adres'
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
}
