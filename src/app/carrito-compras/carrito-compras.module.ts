import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComprasDetailComponent } from './carrito-compras-detail/carrito-compras-detail.component';

import { CarritoComprasService } from './carrito-compras.service';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [CarritoComprasDetailComponent],
  providers:[CarritoComprasService],
  exports: [ CarritoComprasDetailComponent]
})
export class CarritoComprasModule { }
