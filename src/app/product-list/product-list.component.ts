import { Component } from '@angular/core';
import { allProducts } from '../products';

@Component({
  selector: 'app-ProductList',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  myAllProducts = [...allProducts];

  shareButtonOnClick() {
    window.alert('The product has been shared!!');
  }

  onNotifyEvent() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/