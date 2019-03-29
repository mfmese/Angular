import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { CustomerEditValidation } from './customer-validation/customer-edit.validation';
import { BankAccountModule } from '../bank-account/bank-account.module';
import { SharedModule } from '../shared/shared.module';
import { AddressModule } from '../address/address.module';

const routes: Routes = [
  {
    path: '',
    component: CustomerEditComponent,
    children: [
      {
        path: 'customer-edit',
        component: CustomerEditComponent,
        data: { title: 'Customer Edit' }
      },
      {
        path: 'customer-list',
        component: CustomerListComponent,
        data: { title: 'Customer List' }
      },
    ],
  }
];

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    BankAccountModule,    
    AddressModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [CustomerModule.components],
  entryComponents: [CustomerModule.components]
})
export class CustomerModule { 
  static components = [
    CustomerEditComponent,
    CustomerListComponent,
    CustomerEditValidation,
  ];
}
