import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViniloListComponent } from './vinilo-list/vinilo-list.component';
import { ViniloService } from './vinilo.service';
import { HttpClientModule } from '@angular/common/http';
import { ViniloComponent } from './vinilo-detail/vinilo.component';
import { CancionModule } from '../canciones/canciones.module';
import { RouterVinylAppModule } from '../router-module/router.module';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CancionModule,
    RouterVinylAppModule
  ],
  declarations: [
    ViniloListComponent,
    ViniloComponent
  ],
  providers: [
    ViniloService,
    
  ],
  exports: [
    ViniloListComponent,
    ViniloComponent
  ]
})
export class ViniloModule { }