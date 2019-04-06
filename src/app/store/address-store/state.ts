import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IDValue } from 'src/app/models/id-value';


export const featureAdapter: EntityAdapter<IDValue> = createEntityAdapter<IDValue>({
  selectId: model => model.Id,
  sortComparer: (a: IDValue, b: IDValue): number => b.Id.toString().localeCompare(a.Id.toString())
});

export interface State extends EntityState<IDValue> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);
