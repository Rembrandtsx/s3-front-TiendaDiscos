import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {CancionesService} from '../canciones.service';
import { Canciones } from '../canciones';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
    selector: 'app-cancion-edit',
    templateUrl: './canciones-edit.component.html',
    styleUrls: ['./canciones-edit.component.css'],
})
export class CancionEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param editorialService The editorial's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private cancionesService: CancionesService,
        private toastrService: ToastrService,
        private routes: ActivatedRoute,
    ) {}

    /**
    * The id of the editorial that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() cancion_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new editorial
    */
    @Output() update = new EventEmitter();

    /**
    * The editorial to edit
    */
    cancion: Canciones;

    /**
    * Retrieves the information of the editorial
    */
    getCancion(): void {
        this.cancionesService.getCanciones(+this.routes.snapshot.paramMap.get('id')+'/canciones')
            .subscribe(cancion => {
                this.cancion = cancion.filter(obj=>{ return obj.id == this.cancion_id})[0];
            });
    }

    /**
    * Updates the editorial's information
    */
    editCancion(): void {
        this.cancionesService.updateCancion(this.cancion,+this.routes.snapshot.paramMap.get('id')+'/canciones/'+ this.cancion_id)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The editorial's information was updated", "Editorial edition");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the editorial
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.cancion = new Canciones();
        this.getCancion();
    }

    /**
    * The function which is called every time the user chooses to edit a different editorial
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}