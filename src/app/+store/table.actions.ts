import { createAction, props } from '@ngrx/store';

export const addNewCurrency = createAction(
  '[GLOBAL] New Currency',
  props<{ data:[]; }>()
);

export const updateColBackgrounds = createAction(
  '[GLOBAL] Background Update',
  props<{ colBackgrounds:{}; }>()
);

export const updateActiveCol = createAction(
  '[GLOBAL] Active Col. Update',
  props<{ activeCol:[]; }>()
);

