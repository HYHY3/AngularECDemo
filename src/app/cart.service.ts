import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsInfo: Product[] = [];
  constructor() { }

  addToCart(product: Product) {
    this.itemsInfo.push(product);
  }

  getAllItems() {
    return this.itemsInfo;
  }

  clearCart() {
    this.itemsInfo = [];
    return this.itemsInfo;
  }
}
