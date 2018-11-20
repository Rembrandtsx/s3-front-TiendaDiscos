import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

import {ToastrService} from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import {Canciones } from '../canciones';
import { CancionesService } from '../canciones.service';

@Component({
    selector: 'app-cancion-create',
    templateUrl: './canciones-create.component.html',
   // styleUrls: ['./comentario-create.component.css']
})
export class CancionCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param comentarioService The editorials' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private cancionesService: CancionesService,
        private toastrService: ToastrService,
        private routes: ActivatedRoute,
    ) {}

    /**
    * The new editorial
    */
   cancion: Canciones;

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



    /**
    * Creates a new editorial
    */
    createCancion(): Canciones {
        this.cancionesService.createCanciones(this.cancion,+this.routes.snapshot.paramMap.get('id')+'/canciones')
            .subscribe(cancion => {
                this.cancion = cancion;
                this.create.emit();
               // this.toastrService.success("The editorial was created", "Editorial creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.cancion;
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
        this.cancion = new Canciones();
        this.createCancion()
;    }
}