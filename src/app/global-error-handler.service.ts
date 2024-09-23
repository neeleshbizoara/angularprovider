import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  // we can use here third part library like stacktrace.js or
  // log this error information to the server
  // or we can handle this at application level
  constructor() { }

  handleError(error: any): void {
      console.log('There is no error.');
  }
}
