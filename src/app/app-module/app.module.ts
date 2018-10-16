import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app-component/app.component';
import { SearchBarComponent } from '../app-utils-module/searchbar/searchbar.component';

import { HomeComponent } from '../app-utils-module/home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot(routes),
    NgbModule,
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
