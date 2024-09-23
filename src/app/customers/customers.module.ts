import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { API_KEY } from '../value';
import { LogService } from '../log.service';


@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers: [LogService, {provide: API_KEY, useValue: {
    apiKey: 'CUSTOMER_09876',
    modulename: 'CustomerModule'
  }}]
})
export class CustomersModule { }
