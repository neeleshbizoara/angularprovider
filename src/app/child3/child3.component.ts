import { Component, OnInit } from '@angular/core';
import { UpdatedLogService } from '../updated-log.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.css'
})
export class Child3Component implements OnInit {

  message: string = '';
  constructor(private updatedLogService: UpdatedLogService) {
  }

  ngOnInit(){
    this.message = this.updatedLogService.sayHello('Child 3');
  }
}
