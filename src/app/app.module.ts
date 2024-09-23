import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LogService } from './log.service';
import { UpdatedLogService } from './updated-log.service';
import { Child3Component } from './child3/child3.component';
import { GlobalErrorHandlerService } from './global-error-handler.service';
import { API_KEY } from './value';
import { FeatureModule } from './feature/feature.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// let configValue = 19;
// let getLogObject = () => {
//   if(configValue === 9 ) {
//     return new LogService();
//   } else {
//     return new UpdatedLogService();
//   }
// }

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FeatureModule],
  // , RouterOutlet, RouterModule
  // providers: [{provide: LogService, useClass: LogService}],
  providers: [
    {provide: LogService, useClass: LogService},
    // { provide: LogService, useClass: UpdatedLogService },
    // {provide: LogService, useFactory: getLogObject},
    { provide: UpdatedLogService, useExisting: LogService },
    {provide : ErrorHandler, useClass: GlobalErrorHandlerService},
    {provide : ErrorHandler, useClass: ErrorHandler},
    {provide: API_KEY, useValue: {
      apiKey: '123456',
      modulename: 'app'
    }}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
