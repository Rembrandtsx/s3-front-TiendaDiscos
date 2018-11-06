import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancionesComponent } from './canciones-list/canciones.component';
import { CancionesService } from './canciones.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    CancionesComponent
  ],
  providers: [
    CancionesService
  ],
  exports: [
    CancionesComponent
  ]
})
export class CancionModule { }