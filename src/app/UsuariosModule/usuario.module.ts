import { NgModule } from "@angular/core";
import { UsuarioListComponent } from "./usuario-list/usuario.component";
import { UsuarioService } from "./services/usuario.service";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { LoginService } from "./services/login.service";
import { AuthGuard } from "./guards/auth.guard";
import { LoggedGuard } from "./guards/logged.guard";
import { UsuarioComponent } from "./usuario-detail/usuario.component";
import { CarritoComprasModule } from "../carrito-compras/carrito-compras.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProfileComponent } from "./profile/profile.component";
import { ProfileListComponent } from "./profiles/profile-list.component";
import { RouterVinylAppModule } from "../router-module/router.module";
import { RouterModule } from "@angular/router";



@NgModule({
    imports:[
        HttpClientModule,
        CommonModule,
        CarritoComprasModule,
        NgbModule,
        RouterVinylAppModule,
        RouterModule
    ],
    declarations:[
        UsuarioListComponent,
        UsuarioComponent,
        ProfileComponent,
        ProfileListComponent
        
    ],
    providers:[
        UsuarioService,
        LoginService,
        AuthGuard,
        LoggedGuard
    ],
    exports:[
        UsuarioListComponent,
        UsuarioComponent,
        ProfileComponent,
        ProfileListComponent
    ]
})
export class UsuarioModule{

}