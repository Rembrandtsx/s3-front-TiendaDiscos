import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BillingInformationService } from '../billinginformation.service';
import { MedioDePago } from '../../medio-de-pago/medioDePago';

@Component({
  selector: 'app-billinginformation-create',
  templateUrl: './billinginformation-create.component.html',
  styleUrls: ['./billinginformation-create.component.css']
})
export class BillinginformationCreateComponent implements OnInit {

  constructor( private billingInformationService: BillingInformationService,  ) { }

      /**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new author
   */
   @Output() create = new EventEmitter();

   /**
    * el nuevo medio de pago
    */
   medioDePago:MedioDePago;

  ngOnInit() {
  }

      /**
    * Creates an author
    */
   createMedioDePago(): void {
    var medioDePago_create = {
        name: this.medioDePago.name,
        numero: this.medioDePago.numero,
        numeroDeVerificacion: this.medioDePago.numeroVerificacion,
        fechaVencimiento: this.medioDePago.fechaVencimiento,
        cvc:this.medioDePago.cvc,
        imagen: this.medioDePago.imagen
    };
    this.billingInformationService.createMedioDePago(medioDePago_create)
        .subscribe(() => {
            this.create.emit();
        }, err => {
        });
}

}
