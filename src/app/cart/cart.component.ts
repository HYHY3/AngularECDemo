import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  myAllItems = this.cartService.getAllItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
  
  }

  onSubmit(): void {
    // Process checkout data here
    this.myAllItems = this.cartService.clearCart();
    console.log('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
