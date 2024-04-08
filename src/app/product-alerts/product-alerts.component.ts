import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';


@Component({
  selector: 'app-productAlerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input()
  productInfo: Product | undefined;

  @Output()
  notifyEvent = new EventEmitter();
}
