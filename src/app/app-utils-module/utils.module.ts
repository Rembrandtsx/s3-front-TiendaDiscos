
import {NgModule} from '@angular/core';
import { SearchBarComponent } from './searchbar/searchbar.component';
import { NavbarBarComponent } from './navbar/navbar.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RouterVinylAppModule } from '../router-module/router.module';
import { LoginService } from '../UsuariosModule/services/login.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from "videogular2/controls";
import { VgOverlayPlayModule } from "videogular2/overlay-play";
import { VgBufferingModule } from "videogular2/buffering";
import { AudioPlayerComponent } from './audioPlayer/audio-player.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BusquedaComponent } from './searchbar/busqueda/busqueda.component';
import { LimitTo } from './pipes/limitTo.pipe';



@NgModule({
  declarations: [
    SearchBarComponent,
    NavbarBarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AudioPlayerComponent, 
    BusquedaComponent,
    LimitTo
  ],
  imports: [
    NgbModule,
    RouterVinylAppModule,
    CommonModule,
    FormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    NgSelectModule
    
  ],
  providers: [LoginService],
  bootstrap: [],
  exports:[
    SearchBarComponent,
    NavbarBarComponent,
    HomeComponent,
    RegisterComponent,
    AudioPlayerComponent,
    LimitTo
  ]
})
export class UtilsModule { }