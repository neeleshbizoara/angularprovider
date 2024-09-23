import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component implements OnInit {

  message: string = '';
  constructor(private logService: LogService) {
  }

  ngOnInit(): void {
      this.message = this.logService.sayHello('Child 2');
  }

}
