import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterVinylAppModule } from '../router-module/router.module';
import { MadioDePagoCreateComponent } from './madio-de-pago-create/madio-de-pago-create.component';
import { FormsModule } from '@angular/forms';
import { MedioDePagoService } from './medio-de-pago.service';

@NgModule({
  imports: [
    CommonModule,
    RouterVinylAppModule,
    FormsModule
    


  ],
  declarations: [MadioDePagoCreateComponent],
  providers:[MedioDePagoService]
})
export class MedioDePagoModule { }
