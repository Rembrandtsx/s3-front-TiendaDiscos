import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransaccionListComponent } from './transaccion-list/transaccion-list.component';
import { TransaccionService } from './transaccion.service';

import { HttpClientModule } from '@angular/common/http';
import { TransaccionDetailComponent } from './transaccion-detail/transaccion-detail.component';
import { TransaccionCreateComponent } from './transaccion-create/transaccion-create.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    TransaccionListComponent,
    TransaccionDetailComponent,
    TransaccionCreateComponent
  ],
  providers: [
    TransaccionService,
  ],
  exports: [
    TransaccionListComponent,
    TransaccionDetailComponent,
    TransaccionCreateComponent
  ]
})
export class TransaccionModule { }
