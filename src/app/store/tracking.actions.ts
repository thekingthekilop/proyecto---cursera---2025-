import { createAction, props } from '@ngrx/store';

export const incrementTag = createAction(
  '[Tracking] Increment Tag',
  props<{ tag: string }>()
);

export const resetTracking = createAction('[Tracking] Reset');
