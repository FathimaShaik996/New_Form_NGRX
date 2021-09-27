import { createAction, props } from '@ngrx/store';
import { Passenger } from '../Passenger';

const setPassengerDetails = '[PassengerDetails] load passenger-details';
const resetPassengerDetails = '[PassengerDetails] reset passenger-details';

export const setPassengerDetailSuccess = createAction(
  setPassengerDetails,
  props<{ passengerDetail: Passenger }>()
);

export const resetPassengerDetailSuccess = createAction(resetPassengerDetails);
