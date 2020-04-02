import {
  Store as RStore,
  Middleware as RMiddleware,
  Reducer as RReducer,
  Action,
} from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { VariablesState, VariablesActionTypes } from './variables/types';
import { CommunicationActionTypes } from './comms/types';

export * from './variables/types';
export * from './comms/types';

export interface State {
  variables: VariablesState;
}

export type Actions = (
  VariablesActionTypes |
  CommunicationActionTypes
);

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, State, null, Action<string>>;
export type Dispatch = ThunkDispatch<State, null, Action<string>>;
export type Store = RStore<State, Actions> & { dispatch: Dispatch; };
export type Middleware = RMiddleware<{}, State, Dispatch>;
export type Reducer = RReducer<State, Actions>;