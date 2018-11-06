import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ComentarioService } from './comentario.service';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';



@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,

    ],
    declarations: [
        ComentarioListComponent
    ],
    providers: [ComentarioService],
    exports:[ComentarioListComponent]
})
export class ComentarioModule { }