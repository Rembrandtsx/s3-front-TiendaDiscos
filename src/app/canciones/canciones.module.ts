import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancionesComponent } from './canciones-list/canciones.component';
import { CancionesService } from './canciones.service';
import { HttpClientModule } from '@angular/common/http';
import { ComentarioModule } from '../comentario/comentario.module'
import { CancionComponent } from './canciones-detail/canciones-detail.component'
import { CancionCreateComponent} from './canciones-create/canciones-create.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ComentarioModule,
    FormsModule,
    BrowserModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    CancionesComponent,
    CancionComponent,
    CancionCreateComponent
  ],
  providers: [
    CancionesService,
    CancionComponent,
    CancionCreateComponent
  ],
  exports: [
    CancionesComponent,
    CancionCreateComponent
  ]
})
export class CancionModule { }