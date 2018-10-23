import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class RouterVinylAppModule {

}