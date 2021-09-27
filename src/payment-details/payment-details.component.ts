import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Passenger } from '../app/Passenger';
import {
  resetPaymentDetailSuccess,
  setPaymentDetailSuccess,
} from '../app/store/payment-details.actions';
import { PassengerDataService } from '../passenger-data.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css'],
})
export class PaymentDetailsComponent implements OnInit {
  passengerDetails;
  passengerData;
  paymentForm: FormGroup;
  submitted = false;
  constructor(
    private passengerService: PassengerDataService,
    private formBuilder: FormBuilder,
    private store: Store<{ passengerDetail: Passenger }>
  ) {}

  ngOnInit() {
    this.passengerService.passengerData.subscribe((data) => {
      this.passengerDetails = data;
      console.log(data);
    });

    this.paymentForm = this.formBuilder.group({
      creditCard: [
        '',
        [
          Validators.required,
          Validators.maxLength(16),
          Validators.minLength(16),
        ],
      ],
      cva: [
        '',
        [
          Validators.required,
          Validators.maxLength(3),
          Validators.minLength(3),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      expiryDate: [
        '',
        [
          Validators.required,
          Validators.pattern('^(0[1-9]|1[0-2])/?(([0-9]{4}|[0-9]{2})$)'),
        ],
      ],
    });

    this.store.select('passengerDetail').subscribe((data) => {
      console.log('Messages in component', data);
      this.passengerData = data;
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.paymentForm.invalid) {
      return;
    } else {
      this.store.dispatch(
        setPaymentDetailSuccess({ paymentDetail: this.paymentForm.value })
      );
      alert('Confirmed');
    }
  }

  onReset(): void {
    this.submitted = false;
    this.paymentForm.reset();
    this.store.dispatch(resetPaymentDetailSuccess());
  }
}
