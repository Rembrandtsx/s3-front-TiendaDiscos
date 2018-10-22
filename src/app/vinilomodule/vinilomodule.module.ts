import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinilomoduleListComponent } from './vinilomodule-list/vinilomodule-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VinilomoduleListComponent],
  exports: [VinilomoduleListComponent]
})
export class VinilomoduleModule { }
