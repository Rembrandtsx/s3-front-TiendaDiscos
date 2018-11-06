//AQUI SE MANEJAN LAS RUTAS DE LA APP

import { HomeComponent } from '../app-utils-module/home/home.component'
import { SearchBarComponent } from '../app-utils-module/searchbar/searchbar.component';
import { TransaccionListComponent } from '../transaccion/transaccion-list/transaccion-list.component';
import { TransaccionDetailComponent } from '../transaccion/transaccion-detail/transaccion-detail.component';
import { TransaccionCreateComponent } from '../transaccion/transaccion-create/transaccion-create.component';
import { CarritoComprasDetailComponent } from '../carrito-compras/carrito-compras-detail/carrito-compras-detail.component';

import { ComentarioListComponent } from '../comentario/comentario-list/comentario-list.component';
import { WishListListComponent } from '../wishList/wishList-list/wishList-list.component';
import { WishListDetailComponent } from '../wishList/wishList-detail/wishList-detail.component';




export const routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'map', component: SearchBarComponent, pathMatch: 'full'},
   // { path: 'carritocompras',  CarritoComprasDetailComponent , pathMatch: 'full'},
  { path: 'transacciones',
        children: [
            {
                path: 'list',
                component: TransaccionListComponent  , pathMatch: 'full'
            },
            {
                path: ':id',
                component: TransaccionDetailComponent  , pathMatch: 'full'
            },
            {
                path: 'create',
                component: TransaccionCreateComponent  , pathMatch: 'full'
            }
        ]},
        { path: 'carrito-compras',
        
                component: CarritoComprasDetailComponent  , pathMatch: 'full'
            },
        
     { path: 'comentarios', component: ComentarioListComponent , pathMatch: 'full' },
    { path: 'wishList', component: WishListListComponent , pathMatch: 'full' },
    { path: 'wishListt', component: WishListDetailComponent , pathMatch: 'full' },
  ];
