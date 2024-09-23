import { Component, Inject, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { API_KEY } from '../value';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  // providers: [LogService]
})
export class Child1Component implements OnInit{
  message: string = '';
  apiKey: any;

  constructor(private logService: LogService,){
    //  @Inject(API_KEY) _a: any){
    // this.apiKey = _a;
    // console.log(this.apiKey);
  }

  ngOnInit(): void {
      this.message = this.logService.sayHello('Child 1')
      this.apiKey = this.logService.getApiKey();
      console.log(this.apiKey)
  }
}
