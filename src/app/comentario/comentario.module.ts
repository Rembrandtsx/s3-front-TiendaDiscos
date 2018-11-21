import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ComentarioService } from './comentario.service';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';
import { ComentarioCreateComponent} from './comentario-create/comentario-create.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
    declarations: [
        ComentarioListComponent,ComentarioCreateComponent
    ],
    providers: [ComentarioService],
    exports:[ComentarioListComponent,ComentarioCreateComponent]
})
export class ComentarioModule { }