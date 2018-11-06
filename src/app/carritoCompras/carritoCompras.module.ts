import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComprasListComponent } from './carritoCompras-list/carritoCompras-list.component';
import { CarritoComprasService } from './carritoCompras.service';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [CarritoComprasListComponent],
  providers:[CarritoComprasService],
  exports: [CarritoComprasListComponent]
})
export class CarritoComprasModule { }
