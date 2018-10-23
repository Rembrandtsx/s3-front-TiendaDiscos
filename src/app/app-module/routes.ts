//AQUI SE MANEJAN LAS RUTAS DE LA APP

import { HomeComponent } from '../app-utils-module/home/home.component'
import { SearchBarComponent } from '../app-utils-module/searchbar/searchbar.component';
import { TransaccionListComponent } from '../transaccion/transaccion-list/transaccion-list.component';
import { BillinginformationListComponent } from '../billinginformation/billinginformation-list/billinginformation-list.component';




export const routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'map', component: SearchBarComponent, pathMatch: 'full'},
    { path: 'transacciones', component:TransaccionListComponent , pathMatch: 'full' },
    { path: 'billing', component:BillinginformationListComponent , pathMatch: 'full' }

  ]