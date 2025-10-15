import { createReducer, on } from '@ngrx/store';
import { incrementTag, resetTracking } from './tracking.actions';

export interface TrackingState {
  tags: { [key: string]: number };
  totalClicks: number;
}

export const initialState: TrackingState = {
  tags: {},
  totalClicks: 0
};

export const trackingReducer = createReducer(
  initialState,
  on(incrementTag, (state, { tag }) => ({
    ...state,
    tags: {
      ...state.tags,
      [tag]: (state.tags[tag] || 0) + 1
    },
    totalClicks: state.totalClicks + 1
  })),
  on(resetTracking, () => initialState)
);
