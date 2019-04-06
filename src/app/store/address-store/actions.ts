import { Action } from '@ngrx/store';
import { IDValue } from 'src/app/models/id-value';

export enum ActionTypes {
  LOAD_REQUEST = '[Address] Load Request',
  LOAD_FAILURE = '[Address] Load Failure',
  LOAD_SUCCESS = '[Address] Load Success',

  LOAD_STATE_REQUEST = '[Address] Load STATE Request',
  LOAD_STATE_FAILURE = '[Address] Load STATE Failure',
  LOAD_STATE_SUCCESS = '[Address] Load STATE Success'
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


export class LoadStateRequestAction implements Action {
  readonly type = ActionTypes.LOAD_STATE_REQUEST;
}

export class LoadStateFailureAction implements Action {
  readonly type = ActionTypes.LOAD_STATE_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadStateSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_STATE_SUCCESS;
  constructor(public payload: { items: IDValue[] }) {}
}

export type Actions = 
LoadRequestAction | LoadFailureAction | LoadSuccessAction |
LoadStateRequestAction | LoadStateFailureAction | LoadStateSuccessAction;