import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app-component/app.component';



import {TransferHttpCacheModule} from '@nguniversal/common';

import { RouterVinylAppModule } from '../router-module/router.module';
import { UtilsModule } from '../app-utils-module/utils.module';
import { TransaccionModule } from '../transaccion/transaccion.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterVinylAppModule,
    NgbModule,
    TransferHttpCacheModule,
    UtilsModule,
    TransaccionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
