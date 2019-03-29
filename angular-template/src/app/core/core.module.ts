import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-design/material.module';
import { ValidationComponent } from './validations/validation.component';

@NgModule({
  imports: [CoreModule.modules, CommonModule,],  
  exports: [CoreModule.modules, ValidationComponent,],
  declarations: [ValidationComponent]
})
export class CoreModule { 
  static modules = [
    CommonModule,FormsModule, ReactiveFormsModule, MaterialModule
  ];
}
