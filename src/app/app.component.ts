import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProvider';

  constructor(private router: Router) {
    // this.router.events.subscribe((event) => {
    //   console.log(event); // Log router events
    // });
  }
  // @ts-ignore
  data: string;
  url = undefined;

  sendData() {
    // @ts-ignore
    // this.data =this.url.indexOf('');
  }
}
