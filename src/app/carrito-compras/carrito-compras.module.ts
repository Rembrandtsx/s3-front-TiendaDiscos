import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComprasDetailComponent } from './carrito-compras-detail/carrito-compras-detail.component';

import { CarritoComprasService } from './carrito-compras.service';
import {HttpClientModule} from '@angular/common/http'
import { ViniloListComponent } from './vinilo-list/vinilo-list.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [CarritoComprasDetailComponent,ViniloListComponent ],
  providers:[CarritoComprasService],
  exports: [ CarritoComprasDetailComponent, ViniloListComponent]
})
export class CarritoComprasModule { }
