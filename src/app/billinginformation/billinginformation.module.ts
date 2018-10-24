import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillinginformationListComponent } from './billinginformation-list/billinginformation-list.component';
import { BillingInformationService } from './billinginformation.service';
import { RouterVinylAppModule } from '../router-module/router.module';

@NgModule({
  imports: [
    CommonModule,
    RouterVinylAppModule
  ],
  declarations: [BillinginformationListComponent],
  providers: [BillingInformationService],
  exports:[BillinginformationListComponent]
})
export class BillinginformationModule { }
