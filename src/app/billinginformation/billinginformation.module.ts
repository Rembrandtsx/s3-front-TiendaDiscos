import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillinginformationListComponent } from './billinginformation-list/billinginformation-list.component';
import { BillingInformationService } from './billinginformation.service';
import { RouterVinylAppModule } from '../router-module/router.module';
import { BillinginformationDetailComponent } from './billinginformation-detail/billinginformation-detail.component';
import { BillinginformationTarjetacreditoListComponent } from './billinginformation-tarjetacredito-list/billinginformation-tarjetacredito-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterVinylAppModule,
    
  ],
  declarations: [BillinginformationListComponent, BillinginformationDetailComponent, BillinginformationTarjetacreditoListComponent],
  providers: [BillingInformationService],
})
export class BillinginformationModule { }
