import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ComentarioService } from './comentario.service';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';
import { ComentarioCreateComponent} from './comentario-create/comentario-create.component'
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
=======
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> master


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
<<<<<<< HEAD
        BrowserAnimationsModule,
        ToastrModule.forRoot()
=======
        ToastrModule.forRoot(),
        BrowserAnimationsModule,

>>>>>>> master
    ],
    declarations: [
        ComentarioListComponent,ComentarioCreateComponent
    ],
    providers: [ComentarioService],
    exports:[ComentarioListComponent,ComentarioCreateComponent]
})
export class ComentarioModule { }