import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {ViniloService} from '../vinilo.service';
import { Vinilo } from '../vinilo';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-vinilo-edit',
    templateUrl: './vinilo-edit.component.html',
    styleUrls: ['./vinilo-edit.component.css'],
    providers: [DatePipe]
})
export class ViniloEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param editorialService The editorial's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private viniloService: ViniloService,
        private toastrService: ToastrService,
        private routes: ActivatedRoute,
        private dp: DatePipe,
    ) {}

    /**
    * The id of the editorial that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    vinilo: Vinilo;

    @Input() vinilo_id: number;

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
    * Updates the editorial's information
    */
    editVinilo(): void {
        let dateB: Date = new Date(this.vinilo.fechaLanzamiento.year, this.vinilo.fechaLanzamiento.month - 1, this.vinilo.fechaLanzamiento.day);
        this.vinilo.fechaLanzamiento = this.dp.transform(dateB, 'yyyy-MM-dd');
        this.viniloService.updateVinilo(this.vinilo, this.vinilo_id)
            .subscribe(() => {
                this.update.emit();
            });
    }

    getVinilos(): void {
        this.viniloService.getVinilos()

            .subscribe(cancion => {
                this.vinilo = cancion.filter(obj=>{ return obj.id == this.vinilo_id})[0];
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the editorial
    */
    cancelEdition(): void {
        this.cancel.emit();
    }


    create() : void {
        this.update.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.vinilo = new Vinilo();
        this.getVinilos();
        if (this.vinilo && this.vinilo.fechaLanzamiento) {
            this.vinilo.fechaLanzamiento = this.vinilo.fechaLanzamiento.substring(0, 10);
            var date = {
                day: + this.vinilo.fechaLanzamiento.split('-')[2],
                month: + this.vinilo.fechaLanzamiento.split('-')[1],
                year: + this.vinilo.fechaLanzamiento.split('-')[0]
            };
            this.vinilo.fechaLanzamiento = date;

        }
    }

}