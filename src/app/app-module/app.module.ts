import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';


import { AppComponent } from './app-component/app.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { RouterVinylAppModule } from '../router-module/router.module';
import { UtilsModule } from '../app-utils-module/utils.module';
import { TransaccionModule } from '../transaccion/transaccion.module';
import { CarritoComprasModule } from '../carrito-compras/carrito-compras.module';

import { BillinginformationModule } from '../billinginformation/billinginformation.module';
import {ViniloModule} from '../vinilo/vinilo.module';
import { UsuarioModule } from '../UsuariosModule/usuario.module';

import { ComentarioModule } from '../comentario/comentario.module';
import { WishListModule } from '../wishList/wishList.module';
import { CancionModule } from '../canciones/canciones.module';
import { Overlay } from '../canciones/overlay';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from '../interceptors/httperrorinterceptor.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment.prod';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';



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
    ComentarioModule,
    WishListModule,
    CarritoComprasModule,
    CancionModule,
    NgxPermissionsModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule
    
  ],
  providers: [Overlay,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
