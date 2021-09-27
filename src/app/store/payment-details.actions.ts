import { createAction, props } from '@ngrx/store';
import { Payment } from '../Payment';

const setPaymentDetails = '[PaymentDetails] load payment-details';
const resetPaymentDetails = '[PaymentDetails] reset payment-details';

export const setPaymentDetailSuccess = createAction(
  setPaymentDetails,
  props<{ paymentDetail: Payment }>()
);

export const resetPaymentDetailSuccess = createAction(resetPaymentDetails);
