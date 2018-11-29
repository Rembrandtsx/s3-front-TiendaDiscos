import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import {BillinginformationModule } from '../billinginformation.module';
import { BillingInformationService } from '../billinginformation.service';
import {LoginService } from '../../UsuariosModule/services/login.service'
import {TarjetaDeCredito } from '../tarjetadecredito'
@Component({
    selector: 'app-tarjeta-create',
    templateUrl: './tarjeta-create.componet.html',
    //styleUrls: ['./vinilo-create.component.css'],
    providers: [DatePipe]
})
export class TarjetaCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param comentarioService The editorials' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private dp: DatePipe,
        private serviceB: BillingInformationService,
        private toastrService: ToastrService,
        private routes: ActivatedRoute,
        private service:LoginService,
    ) {}

    /**
    * The new editorial
    */
   tarjeta: TarjetaDeCredito;

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
    createTarjeta(): TarjetaDeCredito {
        let dateB: Date = new Date(this.tarjeta.fechaVencimiento.year, this.tarjeta.fechaVencimiento.month - 1, this.tarjeta.fechaVencimiento.day);
        this.tarjeta.fechaVencimiento = this.dp.transform(dateB, 'yyyy-MM-dd');
        this.serviceB.postTarjeta(this.tarjeta)
            .subscribe(vinilo => {
                this.tarjeta = vinilo;
                this.create.emit();
                this.toastrService.success("Crear Vinilo", "Se creo el vinilo de forma existosa");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.tarjeta; 
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
        this.tarjeta = new TarjetaDeCredito();
    }
}