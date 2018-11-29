
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
import { DropZoneComponent } from './dropZone/dropzone-component/dropzone.component';
import { DropZoneDirective } from './dropZone/dropzone.directive';
import { RegisterService } from '../UsuariosModule/services/register.service';
import { NgxPermissionsModule } from 'ngx-permissions';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ViniloModule } from '../vinilo/vinilo.module';
import { CardViniloComponent } from '../vinilo/card-vinilo/card-vinilo.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    NavbarBarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AudioPlayerComponent, 
    BusquedaComponent,
    LimitTo,
    DropZoneComponent,
    DropZoneDirective,
    CardViniloComponent
    
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
    NgSelectModule,
    SlickCarouselModule,
    NgxPermissionsModule.forRoot()
    
  ],
  providers: [LoginService, DropZoneDirective, RegisterService],
  bootstrap: [],
  exports:[
    SearchBarComponent,
    NavbarBarComponent,
    HomeComponent,
    RegisterComponent,
    AudioPlayerComponent,
    LimitTo,
    DropZoneComponent
  ]
})
export class UtilsModule { }