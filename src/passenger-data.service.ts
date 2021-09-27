import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerDataService {
  private passengerDetails = new BehaviorSubject('');
  passengerData = this.passengerDetails.asObservable();
  constructor() {}
  setPassengerDetails(details) {
    this.passengerDetails.next(details);
  }
}
