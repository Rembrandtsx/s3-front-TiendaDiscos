import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterVinylAppModule } from '../router-module/router.module';
import { TarjetaDeCreditoService } from './tarjetadecredito.service';
import { TarjetadecreditoListComponent } from './tarjetadecredito-list/tarjetadecredito-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterVinylAppModule,
    
  ],
  declarations: [TarjetadecreditoListComponent],
  providers:[TarjetaDeCreditoService]
})
export class TarjetadecreditoModule { }
