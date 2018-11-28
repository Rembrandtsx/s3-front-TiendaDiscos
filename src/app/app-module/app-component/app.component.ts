import {Component, OnInit} from '@angular/core';
import { SearchBarComponent } from '../../app-utils-module/searchbar/searchbar.component';
import { Overlay } from '../../canciones/overlay';
import { LoginService } from '../../UsuariosModule/services/login.service';
import { RouterVinylAppModule } from '../../router-module/router.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  
  constructor(public overlay: Overlay, public auth:LoginService, private router: Router){

  }
  ngOnInit(){
    this.auth.start();
  }
  logout(){
    this.overlay.toogleMenu();
    this.auth.logout();
    this.router.navigate(['/login'])
  }
}
