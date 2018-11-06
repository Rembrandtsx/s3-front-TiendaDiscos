//AQUI SE MANEJAN LAS RUTAS DE LA APP

import { HomeComponent } from '../app-utils-module/home/home.component';
import { SearchBarComponent } from '../app-utils-module/searchbar/searchbar.component';
import { TransaccionListComponent } from '../transaccion/transaccion-list/transaccion-list.component';
import { TransaccionDetailComponent } from '../transaccion/transaccion-detail/transaccion-detail.component';
import { ComentarioListComponent } from '../comentario/comentario-list/comentario-list.component';
import { WishListListComponent } from '../wishList/wishList-list/wishList-list.component';
import { WishListDetailComponent } from '../wishList/wishList-detail/wishList-detail.component';
import { ViniloListComponent } from '../vinilo/vinilo-list/vinilo-list.component';




export const routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'map', component: SearchBarComponent, pathMatch: 'full'},
    { path: 'comentarios', component: ComentarioListComponent , pathMatch: 'full' },
    { path: 'wishList', component: WishListListComponent , pathMatch: 'full' },
    { path: 'wishListt', component: WishListDetailComponent , pathMatch: 'full' },
    { path: 'vinilo', component: ViniloListComponent , pathMatch: 'full' },
    { path: 'transacciones',
    children:[{path: 'list', component:TransaccionListComponent },{path: ':id', component:TransaccionDetailComponent }]},

  ];
