import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillinginformationListComponent } from './billinginformation-list/billinginformation-list.component';
import { BillingInformationService } from './billinginformation.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BillinginformationListComponent],
  providers: [BillingInformationService],
  exports:[BillinginformationListComponent]
})
export class BillinginformationModule { }
