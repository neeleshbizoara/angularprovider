import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { API_KEY } from '../value';
import { LogService } from '../log.service';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  // providers: [LogService, {provide: API_KEY, useValue: {
  providers: [{provide: API_KEY, useValue: {
    apiKey: 'ORDER_123456',
    modulename: 'OrderModule'
  }}]
})
export class OrdersModule { }
