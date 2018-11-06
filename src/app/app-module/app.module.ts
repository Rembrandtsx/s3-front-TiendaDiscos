import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app-component/app.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { RouterVinylAppModule } from '../router-module/router.module';
import { UtilsModule } from '../app-utils-module/utils.module';
import { TransaccionModule } from '../transaccion/transaccion.module';
import { BillinginformationModule } from '../billinginformation/billinginformation.module';
import {ViniloModule} from '../vinilo/vinilo.module';
import { UsuarioModule } from '../UsuariosModule/usuario.module';
import { MedioDePagoModule } from '../medio-de-pago/medio-de-pago.module';


@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterVinylAppModule,
    NgbModule,
    TransferHttpCacheModule,
    UtilsModule,
    TransaccionModule,
    BillinginformationModule,
    ViniloModule,
    UsuarioModule,
    MedioDePagoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
