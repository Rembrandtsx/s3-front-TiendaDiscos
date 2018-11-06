import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransaccionListComponent } from './transaccion-list/transaccion-list.component';
import { TransaccionService } from './transaccion.service';

import { HttpClientModule } from '@angular/common/http';
import { TransaccionDetailComponent } from './transaccion-detail/transaccion-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    TransaccionListComponent,
    TransaccionDetailComponent
  ],
  providers: [
    TransaccionService,
  ],
  exports: [
    TransaccionListComponent,
    TransaccionDetailComponent
  ]
})
export class TransaccionModule { }
