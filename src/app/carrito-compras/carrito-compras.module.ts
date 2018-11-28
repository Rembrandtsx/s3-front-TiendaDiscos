import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComprasDetailComponent } from './carrito-compras-detail/carrito-compras-detail.component';

import { CarritoComprasService } from './carrito-compras.service';
import {HttpClientModule} from '@angular/common/http'
import { ViniloListComponent } from './vinilo-list/vinilo-list.component';
import { TransaccionGeneradasListComponent } from './transaccion-list/transaccion-list.component';
import { MapsComponent } from './maps/maps.component';
import { AgmDirectionModule } from 'agm-direction'
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAIbUwPPbxW1zie05rkUQx87Pv-5WwXgC8'
    }),
    AgmDirectionModule
  ],
  declarations: [CarritoComprasDetailComponent,ViniloListComponent, TransaccionGeneradasListComponent, MapsComponent ],
  providers:[CarritoComprasService,GoogleMapsAPIWrapper],
  exports: [ CarritoComprasDetailComponent, ViniloListComponent, TransaccionGeneradasListComponent]
})
export class CarritoComprasModule { }
