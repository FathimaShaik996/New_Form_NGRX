import { createReducer, on } from '@ngrx/store';
import {
  resetPaymentDetailSuccess,
  setPaymentDetailSuccess,
} from './payment-details.actions';

const initialState = null;

const _paymentReducer = createReducer(
  initialState,

  on(setPaymentDetailSuccess, (state, payload) => payload.paymentDetail),
  on(resetPaymentDetailSuccess, (state, payload) => null)
);

export function paymentReducer(state, action) {
  return _paymentReducer(state, action);
}
