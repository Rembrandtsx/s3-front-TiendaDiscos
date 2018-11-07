import { Routes } from '@angular/router';
//AQUI SE MANEJAN LAS RUTAS DE LA APP

import { HomeComponent } from '../app-utils-module/home/home.component'
import { SearchBarComponent } from '../app-utils-module/searchbar/searchbar.component';
import { TransaccionListComponent } from '../transaccion/transaccion-list/transaccion-list.component';
import { TransaccionDetailComponent } from '../transaccion/transaccion-detail/transaccion-detail.component';
import { CreateComponent } from '../transaccion/create/create.component';
import { CarritoComprasDetailComponent } from '../carrito-compras/carrito-compras-detail/carrito-compras-detail.component';

import { BillinginformationListComponent } from '../billinginformation/billinginformation-list/billinginformation-list.component';
import { UsuarioListComponent } from '../UsuariosModule/usuario-list/usuario.component';
import { AuthGuard } from '../UsuariosModule/guards/auth.guard';
import { LoggedGuard } from '../UsuariosModule/guards/logged.guard';
import { LoginComponent } from '../app-utils-module/login/login.component';
import { RegisterComponent } from '../app-utils-module/register/register.component';





export const routes : Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'map', component: SearchBarComponent, pathMatch: 'full'},
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
                component: CreateComponent  , pathMatch: 'full'
            }
        ]},
        { path: 'carrito-compras',
        
                component: CarritoComprasDetailComponent  , pathMatch: 'full'
            },
   
    { path: 'billing', component:BillinginformationListComponent , pathMatch: 'full' },
    { path: 'usuarios', component:UsuarioListComponent , pathMatch: 'full' },
    { path: 'me', component:UsuarioListComponent, pathMatch:'full', canActivate:[AuthGuard]},
    { path: 'login', component: LoginComponent, pathMatch:'full', canActivate:[LoggedGuard]},
    { path: 'register', component: RegisterComponent, pathMatch:'full', canActivate:[LoggedGuard]}

  ]