import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillinginformationListComponent } from './billinginformation-list/billinginformation-list.component';
import { BillingInformationService } from './billinginformation.service';
import { RouterVinylAppModule } from '../router-module/router.module';
import { BillinginformationDetailComponent } from './billinginformation-detail/billinginformation-detail.component';
import { TarjetacreditoListComponent } from './tarjetacredito-list/tarjetacredito-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterVinylAppModule,
    
  ],
  declarations: [
    BillinginformationListComponent,
    BillinginformationDetailComponent,
    TarjetacreditoListComponent
  ],
  providers: [BillingInformationService],
})
export class BillinginformationModule { }
