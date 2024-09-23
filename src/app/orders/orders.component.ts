import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
  message: string = '';
  apiKey: any;
  constructor(private logService: LogService) {

  }

  ngOnInit(): void {
      this.message = this.logService.sayHello('Orders');
      this.apiKey = this.logService.getApiKey();
      console.log(this.apiKey)
  }
}
