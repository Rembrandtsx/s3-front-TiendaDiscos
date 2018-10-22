
import {NgModule} from '@angular/core';
import { SearchBarComponent } from './searchbar/searchbar.component';
import { NavbarBarComponent } from './navbar/navbar.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    SearchBarComponent,
    NavbarBarComponent,
    HomeComponent
  ],
  imports: [
    NgbModule
  ],
  providers: [],
  bootstrap: [],
  exports:[SearchBarComponent,NavbarBarComponent,HomeComponent]
})
export class UtilsModule { }