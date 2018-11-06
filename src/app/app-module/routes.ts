//AQUI SE MANEJAN LAS RUTAS DE LA APP

import { HomeComponent } from '../app-utils-module/home/home.component';
import { SearchBarComponent } from '../app-utils-module/searchbar/searchbar.component';
import { TransaccionListComponent } from '../transaccion/transaccion-list/transaccion-list.component';
import { ComentarioListComponent } from '../comentario/comentario-list/comentario-list.component';
import { WishListListComponent } from '../wishList/wishList-list/wishList-list.component';
import { WishListDetailComponent } from '../wishList/wishList-detail/wishList-detail.component';
import { WishListCreateComponent } from '../wishList/wishList-create/wishList-create.component';




export const routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'map', component: SearchBarComponent, pathMatch: 'full'},
    { path: 'transacciones', component: TransaccionListComponent , pathMatch: 'full' },
    { path: 'comentarios', component: ComentarioListComponent , pathMatch: 'full' },
    { path: 'wishList', component: WishListListComponent , pathMatch: 'full' },
    { path: 'wishListt', component: WishListCreateComponent , pathMatch: 'full' },
  ];
