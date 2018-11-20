import {Component} from '@angular/core';
import { SearchBarComponent } from '../../app-utils-module/searchbar/searchbar.component';
import { Overlay } from '../../canciones/overlay';
import { LoginService } from '../../UsuariosModule/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public overlay: Overlay, public auth:LoginService){

  }
  logout(){
    this.overlay.toogleMenu();
    this.auth.logout();
  }
}
