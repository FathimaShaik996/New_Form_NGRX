import { createReducer, on } from '@ngrx/store';
import {
  setPassengerDetailSuccess,
  resetPassengerDetailSuccess,
} from './passenger-details.actions';

const initialState = null;

const _passengerReducer = createReducer(
  initialState,

  on(setPassengerDetailSuccess, (state, payload) => payload.passengerDetail),
  on(resetPassengerDetailSuccess, (state, payload) => null)
);

export function passengerReducer(state, action) {
  return _passengerReducer(state, action);
}
