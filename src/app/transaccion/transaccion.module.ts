import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransaccionListComponent } from './transaccion-list/transaccion-list.component';
import { TransaccionService } from './transaccion.service';

import { HttpClientModule } from '@angular/common/http';
import { TransaccionDetailComponent } from './transaccion-detail/transaccion-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterVinylAppModule } from '../router-module/router.module';
import { ViniloComponent } from './vinilo-detail/vinilo.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterVinylAppModule
  ],
  declarations: [
    TransaccionListComponent,
    TransaccionDetailComponent,
    ViniloComponent
  ],
  providers: [
    TransaccionService,
  ],
  exports: [
    TransaccionListComponent,
    TransaccionDetailComponent,
     ViniloComponent
  ]
})
export class TransaccionModule { }
