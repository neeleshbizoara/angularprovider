import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class UpdatedLogService {

  private static count = 0;
  constructor() {
    UpdatedLogService.count = UpdatedLogService.count + 1;
    console.log(UpdatedLogService.count);
   }

   sayHello(name: string): string {
    // New version of API 
    return 'Hello Updated Log Service '
   }

   sayNotHello(): string {
    return 'Hello not allowed'
   }
}
