import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AddressStoreModule } from './address-store';
import { environment } from 'src/environments/environment';
import { addressReducer } from './address/reducer';

@NgModule({
  imports: [
    CommonModule,
    // AddressStoreModule,
    StoreModule.forRoot({address: addressReducer}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  declarations: []
})
export class RootStoreModule {}