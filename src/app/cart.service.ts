import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsInfo: Product[] = [];
  
  constructor(private http: HttpClient) {

  }

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

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
