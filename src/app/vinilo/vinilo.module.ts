import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViniloListComponent } from './vinilo-list/vinilo-list.component';
import { ViniloService } from './vinilo.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ViniloListComponent
  ],
  providers: [
    ViniloService
  ],
  exports: [
    ViniloListComponent
  ]
})
export class ViniloModule { }