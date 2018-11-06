import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViniloListComponent } from './vinilo-list/vinilo-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViniloListComponent],
  exports: [ViniloListComponent
  ]
})
export class ViniloModule { }
