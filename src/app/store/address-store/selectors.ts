import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { featureAdapter, State } from './state';
import { IDValue } from 'src/app/models/id-value';
import * as featureActions from './actions';

export const selectCountryState: MemoizedSelector<object, State> = createFeatureSelector<State>('Address');
export const selectAllCountryItems: (state: object) => IDValue[] = featureAdapter.getSelectors(selectCountryState).selectAll;
export const selectCountryById = (id: number) => createSelector(selectAllCountryItems, (allCountrys: IDValue[]) => {
  if (allCountrys)
    return allCountrys.find(p => p.Id === id);
  else
    return null;
});

export const getError = (state: State): any => state.error;
export const getIsLoading = (state: State): boolean => state.isLoading;
export const selectCountryError: MemoizedSelector<object, any> = createSelector(selectCountryState, getError);
export const selectCountryIsLoading: MemoizedSelector<object, boolean> = createSelector(selectCountryState, getIsLoading);


export const selectStateState: MemoizedSelector<object, State> = createFeatureSelector<State>('Address');
export const selectAllStateItems: (state: object) => IDValue[] = featureAdapter.getSelectors(selectStateState).selectAll;
export const selectStateById = (id: number) => createSelector(selectAllStateItems, (items: IDValue[]) => {
  if (items)
    return items.find(p => p.Id === id);
  else
    return null;
});

export const getStateError = (state: State): any => state.error;
export const getStateIsLoading = (state: State): boolean => state.isLoading;
export const selectStateError: MemoizedSelector<object, any> = createSelector(selectStateState, getError);
export const selectStateIsLoading: MemoizedSelector<object, boolean> = createSelector(selectStateState, getIsLoading);