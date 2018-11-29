import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {LoginService } from '../../UsuariosModule/services/login.service'
import {BillingInformationService} from '../billinginformation.service';
import { BillingInformation } from '../billinginformation';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import {DatePipe} from '@angular/common';
import { TarjetaDeCredito } from '../tarjetadecredito';

@Component({
    selector: 'app-tarjeta-edit',
    templateUrl: './tarjeta-edit.component.html',
    //styleUrls: ['./vinilo-edit.component.css'],
    providers: [DatePipe]
})
export class TarjetaEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param editorialService The editorial's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private service: BillingInformationService,
        private toastrService: ToastrService,
        private routes: ActivatedRoute,
        private dp: DatePipe,
    ) {}

    /**
    * The id of the editorial that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    tarjeta: TarjetaDeCredito;

    @Input() id: number;

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
    editTarjeta(): void {
        let dateB: Date = new Date(this.tarjeta.fechaVencimiento.year, this.tarjeta.fechaVencimiento.month - 1, this.tarjeta.fechaVencimiento.day);
        this.tarjeta.fechaVencimiento = this.dp.transform(dateB, 'yyyy-MM-dd');
        this.service.updateTarjeta(this.tarjeta, this.id)
            .subscribe(() => {
                this.update.emit();
            });
    }

    getTarjeta(): void {
        this.service.getTarjeta()

            .subscribe(tar => {
                this.tarjeta = tar.filter(obj=>{ return obj.id == this.id})[0];
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
        this.tarjeta = new TarjetaDeCredito();
        this.getTarjeta();
    }

}