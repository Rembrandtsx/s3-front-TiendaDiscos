import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillinginformationListComponent } from './billinginformation-list/billinginformation-list.component';
import { BillingInformationService } from './billinginformation.service';
import { RouterVinylAppModule } from '../router-module/router.module';
import { TarjetacreditoListComponent } from './tarjetacredito-list/tarjetacredito-list.component';
import { TarjetaCreateComponent } from './tarjeta-create/tarjeta-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TarjetaEditComponent } from './tarjeta-edit/tarjeta-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterVinylAppModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
    
  ],
  declarations: [
    BillinginformationListComponent,
    TarjetacreditoListComponent,
    TarjetaCreateComponent,
    TarjetaEditComponent
  ],
  providers: [BillingInformationService,TarjetaCreateComponent,TarjetacreditoListComponent,TarjetaEditComponent],
})
export class BillinginformationModule { }
