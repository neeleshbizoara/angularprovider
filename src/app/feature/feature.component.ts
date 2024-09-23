import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent implements OnInit{

  message: string = '';

  constructor(private logService: LogService) {

  }

  ngOnInit(): void {
      this.message = this.logService.sayHello('Feature Module ')
  }

}
