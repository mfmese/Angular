import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AddressStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('Address', featureReducer),
    EffectsModule.forFeature([AddressStoreEffects])
  ],
  providers: [AddressStoreEffects]
})
export class AddressStoreModule {}