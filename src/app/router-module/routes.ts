import { Routes } from '@angular/router';
//AQUI SE MANEJAN LAS RUTAS DE LA APP

import { HomeComponent } from '../app-utils-module/home/home.component';
import { SearchBarComponent } from '../app-utils-module/searchbar/searchbar.component';
import { TransaccionListComponent } from '../transaccion/transaccion-list/transaccion-list.component';
import { TransaccionDetailComponent } from '../transaccion/transaccion-detail/transaccion-detail.component';
import { CarritoComprasDetailComponent } from '../carrito-compras/carrito-compras-detail/carrito-compras-detail.component';

import { BillinginformationListComponent } from '../billinginformation/billinginformation-list/billinginformation-list.component';
import { ViniloListComponent} from '../vinilo/vinilo-list/vinilo-list.component';
import { UsuarioListComponent } from '../UsuariosModule/usuario-list/usuario.component';
import { AuthGuard } from '../UsuariosModule/guards/auth.guard';
import { LoggedGuard } from '../UsuariosModule/guards/logged.guard';
import { LoginComponent } from '../app-utils-module/login/login.component';
import { RegisterComponent } from '../app-utils-module/register/register.component';
import { ComentarioListComponent } from '../comentario/comentario-list/comentario-list.component';
import { WishListListComponent } from '../wishList/wishList-list/wishList-list.component';
import { WishListDetailComponent } from '../wishList/wishList-detail/wishList-detail.component';
import { CancionesComponent } from '../canciones/canciones-list/canciones.component';
import { ViniloComponent } from '../vinilo/vinilo-detail/vinilo.component';
import { UsuarioComponent } from '../UsuariosModule/usuario-detail/usuario.component';
import { ComentarioCreateComponent } from '../comentario/comentario-create/comentario-create.component';





export const routes : Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'map', component: SearchBarComponent, pathMatch: 'full'},
     { path: 'carrito-compras',component: CarritoComprasDetailComponent  , pathMatch: 'full' },
   
    { path: 'billing', component:BillinginformationListComponent , pathMatch: 'full' },
    { path: 'vinilos' , component : ViniloListComponent, pathMatch : 'full'},
    {
      path: 'vinilos/:id', component: ViniloComponent, pathMatch:'full'
    },
    { path: 'usuarios', component:UsuarioListComponent , pathMatch: 'full' },
    { path: 'me', component:UsuarioComponent, pathMatch:'full', canActivate:[AuthGuard]},
    { path: 'login', component: LoginComponent, pathMatch:'full', canActivate:[LoggedGuard]},
    { path: 'register', component: RegisterComponent, pathMatch:'full', canActivate:[LoggedGuard]},
    { path: 'comentariosCreate', component: ComentarioCreateComponent , pathMatch: 'full' },
    { path: 'wishList', component: WishListListComponent , pathMatch: 'full' },
    { path: 'wishListt', component: WishListDetailComponent , pathMatch: 'full' },
    { path: 'transacciones',
    children:[{path: 'list', component:TransaccionListComponent },{path: ':id', component:TransaccionDetailComponent }], 
     },
    { path: 'transaccion', component: TransaccionListComponent , pathMatch: 'full' },
    { path: 'comentarios', component: ComentarioListComponent , pathMatch: 'full' },
    { path: 'wishList', component: WishListListComponent , pathMatch: 'full' },
    { path: 'wishListt', component: WishListDetailComponent , pathMatch: 'full' },
    { path:'canciones', component: CancionesComponent, pathMatch: 'full' }
  ]