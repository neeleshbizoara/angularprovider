import { Inject, Injectable } from '@angular/core';
import { API_KEY } from './value';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class LogService {

  private static count = 0;
  constructor(@Inject(API_KEY) private apiKey: any) {
    LogService.count = LogService.count + 1;
    console.log(LogService.count);
   }

   sayHello(name: string) {
    return 'Hello ' + name;
   }

   getApiKey() {
    return this.apiKey;
   }
}
