import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransaccionListComponent } from './transaccion-list/transaccion-list.component';
import { TransaccionService } from './transaccion.service';

import { HttpClientModule } from '@angular/common/http';
import { TransaccionDetailComponent } from './transaccion-detail/transaccion-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterVinylAppModule } from '../router-module/router.module';
import { ViniloComponent } from './vinilo-detail/vinilo.component';
import { MapsComponent } from './maps/maps.component';
import { AgmDirectionModule } from 'agm-direction'
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { EditTransaccionComponent } from './edit-transaccion/edit-transaccion.component';
import { EditEnvioComponent } from './edit-envio/edit-envio.component';
import{ComentarioModule}from '../comentario/comentario.module'
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterVinylAppModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAIbUwPPbxW1zie05rkUQx87Pv-5WwXgC8'
    }),
    AgmDirectionModule,
    ComentarioModule
  ],
  declarations: [
    TransaccionListComponent,
    TransaccionDetailComponent,
    ViniloComponent,
    MapsComponent,
    EditTransaccionComponent,
    EditEnvioComponent
  ],
  providers: [
    TransaccionService, ,GoogleMapsAPIWrapper
  ],
  exports: [
    TransaccionListComponent,
    TransaccionDetailComponent,
     ViniloComponent, MapsComponent
  ]
})
export class TransaccionModule { }
