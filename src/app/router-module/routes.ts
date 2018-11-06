import { Routes } from '@angular/router';
//AQUI SE MANEJAN LAS RUTAS DE LA APP

import { HomeComponent } from '../app-utils-module/home/home.component';
import { SearchBarComponent } from '../app-utils-module/searchbar/searchbar.component';
import { TransaccionListComponent } from '../transaccion/transaccion-list/transaccion-list.component';
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




export const routes : Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'map', component: SearchBarComponent, pathMatch: 'full'},
    { path: 'transacciones', component:TransaccionListComponent , pathMatch: 'full' },
    { path: 'billing', component:BillinginformationListComponent , pathMatch: 'full' },
    { path: 'vinilos' , component : ViniloListComponent, pathMatch : 'full'},
    { path: 'usuarios', component:UsuarioListComponent , pathMatch: 'full' },
    { path: 'me', component:UsuarioListComponent, pathMatch:'full', canActivate:[AuthGuard]},
    { path: 'login', component: LoginComponent, pathMatch:'full', canActivate:[LoggedGuard]},
    { path: 'register', component: RegisterComponent, pathMatch:'full', canActivate:[LoggedGuard]},
    { path: 'comentarios', component: ComentarioListComponent , pathMatch: 'full' },
    { path: 'wishList', component: WishListListComponent , pathMatch: 'full' },
    { path: 'wishListt', component: WishListDetailComponent , pathMatch: 'full' },
    
  ]