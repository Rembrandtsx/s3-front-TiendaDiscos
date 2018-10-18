
import {NgModule} from '@angular/core';
import { SearchBarComponent } from './searchbar/searchbar.component';
import { NavbarBarComponent } from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    SearchBarComponent,
    NavbarBarComponent
  ],
  imports: [
    NgbModule
  ],
  providers: [],
  bootstrap: [],
  exports:[SearchBarComponent,NavbarBarComponent]
})
export class UtilsModule { }