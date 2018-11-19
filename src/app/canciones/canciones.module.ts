import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancionesComponent } from './canciones-list/canciones.component';
import { CancionesService } from './canciones.service';
import { HttpClientModule } from '@angular/common/http';
import { ComentarioModule } from '../comentario/comentario.module'
import { CancionComponent } from './canciones-detail/canciones-detail.component'
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ComentarioModule,
    
  ],
  declarations: [
    CancionesComponent,
    CancionComponent
  ],
  providers: [
    CancionesService,
    CancionComponent
  ],
  exports: [
    CancionesComponent
  ]
})
export class CancionModule { }