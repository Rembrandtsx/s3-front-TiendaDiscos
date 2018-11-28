import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import {Vinilo } from '../vinilo';
import { ViniloService } from '../vinilo.service';
import {LoginService } from '../../UsuariosModule/services/login.service'
@Component({
    selector: 'app-vinilo-create',
    templateUrl: './vinilo-create.component.html',
    styleUrls: ['./vinilo-create.component.css'],
    providers: [DatePipe]
})
export class ViniloCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param comentarioService The editorials' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private dp: DatePipe,
        private vinilosService: ViniloService,
        private toastrService: ToastrService,
        private routes: ActivatedRoute,
        private service:LoginService,
    ) {}

    /**
    * The new editorial
    */
   vinilo: Vinilo;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new editorial
    */
    @Output()  create= new EventEmitter();



    /**
    * Creates a new editorial
    */
    createVinilo(): Vinilo {
        let dateB: Date = new Date(this.vinilo.fechaLanzamiento.year, this.vinilo.fechaLanzamiento.month - 1, this.vinilo.fechaLanzamiento.day);
        this.vinilo.fechaLanzamiento = this.dp.transform(dateB, 'yyyy-MM-dd');
        this.vinilosService.createVinilos(this.vinilo,this.service.getUserObject().id)
            .subscribe(vinilo => {
                this.vinilo = vinilo;
                this.create.emit();
                this.toastrService.success("Crear Vinilo", "Se creo el vinilo de forma existosa");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.vinilo; 
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
        this.vinilo = new Vinilo();
    }
}