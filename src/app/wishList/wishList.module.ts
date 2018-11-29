import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from '@angular/common/http'
import { ViniloListComponent } from './vinilo-list/vinilo-list.component';
import { TransaccionGeneradasListComponent } from './transaccion-list/transaccion-list.component';
import { MapsComponent } from './maps/maps.component';
import { AgmDirectionModule } from 'agm-direction'
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { WishListDetailComponent } from './wishList-detail/wishList-detail.component';
import { WishListService } from './wishList.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAIbUwPPbxW1zie05rkUQx87Pv-5WwXgC8'
    }),
    AgmDirectionModule
  ],
  declarations: [
    WishListDetailComponent,
    ViniloListComponent,
     TransaccionGeneradasListComponent,
     MapsComponent 
    ],
  providers:[
    WishListService,
    GoogleMapsAPIWrapper
  ],
  exports: [
      ViniloListComponent,
     TransaccionGeneradasListComponent
    ]
})
export class WishListModule { }
