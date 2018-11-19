import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

import {ToastrService} from 'ngx-toastr';

import {Comentario } from '../comentario';
import { ComentarioService } from '../comentario.service';

@Component({
    selector: 'app-comentario-create',
    templateUrl: './comentario-create.component.html',
    styleUrls: ['./comentario-create.component.css']
})
export class ComentarioCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param comentarioService The editorials' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private comentarioService: ComentarioService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new editorial
    */
   comentario: Comentario;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new editorial
    */
    @Output() create = new EventEmitter();

    @Input () tipo:string;
    
    @Input() id:number;


    /**
    * Creates a new editorial
    */
    createComentario(): Comentario {
        this.comentarioService.createComentarios(this.comentario,this.tipo,this.id)
            .subscribe((comentario) => {
                this.comentario = comentario;
                this.create.emit();
               // this.toastrService.success("The editorial was created", "Editorial creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.comentario;
    }

    /**
    * Informs the parent component that the user no longer wants to create an editorial
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.comentario = new Comentario();
    }
}