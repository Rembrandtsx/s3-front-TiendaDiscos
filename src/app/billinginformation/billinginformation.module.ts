import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillinginformationListComponent } from './billinginformation-list/billinginformation-list.component';
import { BillingInformationService } from './billinginformation.service';
import { RouterVinylAppModule } from '../router-module/router.module';
import { BillinginformationDetailComponent } from './billinginformation-detail/billinginformation-detail.component';
import { BillinginformationMedioDePagoListComponent } from './billinginformation-medio-de-pago-list/billinginformation-medio-de-pago-list.component';
import { BillinginformationCreateComponent } from './billinginformation-create/billinginformation-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterVinylAppModule,
    FormsModule
    
  ],
  declarations: [BillinginformationListComponent, BillinginformationDetailComponent, BillinginformationMedioDePagoListComponent, BillinginformationCreateComponent],
  providers: [BillingInformationService],
})
export class BillinginformationModule { }
