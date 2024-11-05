import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {
  paymentForm: FormGroup;
  stripe: Stripe | null = null;
  cardElement: any;
  isPaymentProcessing = false;
  errorMessage = '';
  successMessage = '';

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  async ngOnInit() {
    this.stripe = await loadStripe('your-public-key-from-stripe');
    const elements = this.stripe?.elements();
    this.cardElement = elements?.create('card');
    this.cardElement?.mount('#card-element');
  }

  async handlePayment() {
    if (!this.stripe || !this.cardElement || !this.paymentForm.valid) {
      return;
    }

    this.isPaymentProcessing = true;
    const { name, email } = this.paymentForm.value;

    const paymentResult = await this.stripe.createPaymentMethod({
      type: 'card',
      card: this.cardElement,
      billing_details: {
        name: name,
        email: email
      }
    });

    if (paymentResult.error) {
      this.errorMessage = paymentResult.error.message ?? 'Payment failed';
      this.isPaymentProcessing = false;
    } else {
      // TODO: Send paymentResult.paymentMethod.id to your backend to complete the charge.
      this.successMessage = 'Payment was successful!';
      this.isPaymentProcessing = false;
    }
  }


}
 

