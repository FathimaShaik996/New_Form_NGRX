import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerDetailsComponent } from '../passenger-details/passenger-details.component';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';

const routes: Routes = [
  { path: '', component: PassengerDetailsComponent },
  { path: 'payment', component: PaymentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
