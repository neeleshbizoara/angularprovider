import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  
  message: string = '';
  apiKey: any;
  constructor(private logService: LogService) {

  }

  ngOnInit(): void {
      this.apiKey = this.logService.getApiKey();
      this.message = this.logService.sayHello('Customer');
  }
}
