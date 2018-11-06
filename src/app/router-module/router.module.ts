import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { UsuarioModule } from '../UsuariosModule/usuario.module';

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    providers:[],
    declarations: []
})
export class RouterVinylAppModule {

}