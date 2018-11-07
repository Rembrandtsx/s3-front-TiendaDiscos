import { NgModule } from "@angular/core";
import { UsuarioListComponent } from "./usuario-list/usuario.component";
import { UsuarioService } from "./services/usuario.service";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { LoginService } from "./services/login.service";
import { AuthGuard } from "./guards/auth.guard";
import { LoggedGuard } from "./guards/logged.guard";
import { UsuarioComponent } from "./usuario-detail/usuario.component";

@NgModule({
    imports:[
        HttpClientModule,
        CommonModule
    ],
    declarations:[
        UsuarioListComponent,
        UsuarioComponent
    ],
    providers:[
        UsuarioService,
        LoginService,
        AuthGuard,
        LoggedGuard
    ],
    exports:[
        UsuarioListComponent,
        UsuarioComponent
    ]
})
export class UsuarioModule{

}