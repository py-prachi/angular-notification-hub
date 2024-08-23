
import { createAction, props } from '@ngrx/store';

export const setOrgDetails = createAction(
  '[Org] Set Org Details',
  props<{ orgName: string; orgKey: string }>()
);
