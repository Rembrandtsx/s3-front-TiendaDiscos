import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransaccionListComponent } from './transaccion-list/transaccion-list.component';
import { TransaccionService } from './transaccion.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    TransaccionListComponent
  ],
  providers: [
    TransaccionService,
  ],
  exports: [
    TransaccionListComponent
  ]
})
export class TransaccionModule { }
