import { NgModule } from '@angular/core';
import { BankAccountEditComponent } from './bank-account-edit/bank-account-edit.component';
import { BankAccountListComponent } from './bank-account-list/bank-account-list.component';
import { Routes } from '@angular/router';
import { BankAccountValidationComponent } from './bank-account-validation/bank-account-validation.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BankAccountEditComponent,
    children: [
      {
        path: 'bank-account-edit',
        component: BankAccountEditComponent,
        data: { title: 'bank-account Edit' }
      },
      {
        path: 'bank-account-list',
        component: BankAccountListComponent,
        data: { title: 'bank-account List' }
      },
    ],
  }
];

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [BankAccountModule.components],
  entryComponents:[BankAccountModule.components]
})
export class BankAccountModule { 
  static components = [
    BankAccountEditComponent,
    BankAccountListComponent,
    BankAccountValidationComponent
  ];
}
