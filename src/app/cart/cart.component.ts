import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  myAllItems = this.cartService.getAllItems();

  constructor(private cartService: CartService) {
  
  }
}
