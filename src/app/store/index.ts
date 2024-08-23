import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { orgReducer, OrgState } from './org.reducer';

export interface AppState {
  org: OrgState;
}

export const reducers: ActionReducerMap<AppState> = {
  org: orgReducer
};