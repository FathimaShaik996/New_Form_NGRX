import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PassengerDetailsComponent } from '../passenger-details/passenger-details.component';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';
import { AppRoutingModule } from './app.routing.module';
import { StoreModule } from '@ngrx/store';
import { passengerReducer } from './store/passenger-details.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { paymentReducer } from './store/payment-details.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      passengerDetail: passengerReducer,
      paymentDetail: paymentReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  declarations: [
    AppComponent,
    PassengerDetailsComponent,
    PaymentDetailsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
