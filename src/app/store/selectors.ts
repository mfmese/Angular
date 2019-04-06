import { createSelector, MemoizedSelector } from '@ngrx/store';
import { AddressStoreSelectors } from './address-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  AddressStoreSelectors.selectCountryError,
  (addressError: string) => {
    return addressError;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  AddressStoreSelectors.selectCountryIsLoading,
  (address: boolean) => {
    return address;
  }
);
