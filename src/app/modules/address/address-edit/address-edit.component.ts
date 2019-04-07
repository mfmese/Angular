import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KeyValue } from 'src/app/models/key-value';
import { Store, select } from '@ngrx/store';
import { RootStoreState, AddressStoreSelectors, AddressStoreActions } from 'src/app/store';
import { IDValue } from 'src/app/models/id-value';
import * as fromAddress from './../../../store/address/reducer';

@Component({
  selector: 'address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {

  address$: Observable<IDValue[]>;

  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  address: string;
  types = [];
  statuses: KeyValue[] = [];

  constructor(private store$: Store<fromAddress.State>, public dialogRef: MatDialogRef<AddressEditComponent>, @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
    this.address$ = this.store$.pipe(select('address'));

    // this.error$ = this.store$.pipe(select(AddressStoreSelectors.selectCountryError));
    // this.isLoading$ = this.store$.pipe(select(AddressStoreSelectors.selectCountryIsLoading));

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

  onRefresh() {
    this.store$.dispatch(
      new AddressStoreActions.LoadRequestAction()
    );
  }

  cancel(): void {
    this.dialogRef.close();
  }

  private filter(value: string = "", list: IDValue[]): Observable<IDValue[]> {
    const filterValue = value.toLowerCase();
    return of(list.filter(option => option.Value.toLowerCase().indexOf(filterValue) === 0));
  }
}
