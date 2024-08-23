
import { createReducer, on } from '@ngrx/store';
import { setOrgDetails } from './org.action';


export interface OrgState {
  orgName: string;
  orgKey: string;
}

export const initialState: OrgState = {
  orgName: '',
  orgKey: ''
};

export const orgReducer = createReducer(
  initialState,
  on(setOrgDetails, (state, { orgName, orgKey }) => ({
    ...state,
    orgName,
    orgKey
  }))
);
