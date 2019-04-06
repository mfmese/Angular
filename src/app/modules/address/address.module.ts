import { NgModule } from '@angular/core';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressValidationComponent } from './address-validation/address-validation.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
  ],
  declarations: [AddressModule.components],
  entryComponents: [AddressModule.components]
})
export class AddressModule { 
  static components = [
    AddressEditComponent,
    AddressListComponent,
    AddressValidationComponent
  ]
}
