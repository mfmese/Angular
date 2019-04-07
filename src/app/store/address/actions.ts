import { Action } from '@ngrx/store';
import { IDValue } from 'src/app/models/id-value';

export enum ActionTypes {
  LOAD_REQUEST = '[Address] Load Request',
  LOAD_FAILURE = '[Address] Load Failure',
  LOAD_SUCCESS = '[Address] Load Success',
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: IDValue[] }) {}
}

export type Actions = 
LoadRequestAction | LoadFailureAction | LoadSuccessAction;