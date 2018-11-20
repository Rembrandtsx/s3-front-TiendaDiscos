import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ComentarioService } from './comentario.service';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';
import { ComentarioCreateComponent} from './comentario-create/comentario-create.component'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,

    ],
    declarations: [
        ComentarioListComponent,ComentarioCreateComponent
    ],
    providers: [ComentarioService],
    exports:[ComentarioListComponent,ComentarioCreateComponent]
})
export class ComentarioModule { }