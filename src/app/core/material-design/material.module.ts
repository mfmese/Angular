import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatInputModule,
  MatIconModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTableModule,
  MatDialogModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatSortModule,
  MatDatepickerModule,
} from '@angular/material';

const modules = [
  CommonModule,
  FlexLayoutModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatInputModule,
  MatDividerModule,
  MatIconModule,
  MatAutocompleteModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSelectModule,
  MatRadioModule,
  MatTableModule,
  MatSortModule,
  MatDatepickerModule,
  MatMomentDateModule 
];

@NgModule({
  imports: [modules],
  exports: [modules]  
})
export class MaterialModule { }
