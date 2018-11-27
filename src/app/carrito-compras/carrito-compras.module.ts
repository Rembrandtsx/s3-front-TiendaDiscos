import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComprasDetailComponent } from './carrito-compras-detail/carrito-compras-detail.component';

import { CarritoComprasService } from './carrito-compras.service';
import {HttpClientModule} from '@angular/common/http'
import { ViniloListComponent } from './vinilo-list/vinilo-list.component';
import { TransaccionGeneradasListComponent } from './transaccion-list/transaccion-list.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [CarritoComprasDetailComponent,ViniloListComponent, TransaccionGeneradasListComponent ],
  providers:[CarritoComprasService],
  exports: [ CarritoComprasDetailComponent, ViniloListComponent, TransaccionGeneradasListComponent]
})
export class CarritoComprasModule { }
