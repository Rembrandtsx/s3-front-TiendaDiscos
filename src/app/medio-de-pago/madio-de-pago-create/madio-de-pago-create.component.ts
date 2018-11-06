import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MedioDePago } from '../medioDePago';
import { MedioDePagoService } from '../medio-de-pago.service';

@Component({
  selector: 'app-madio-de-pago-create',
  templateUrl: './madio-de-pago-create.component.html',
  styleUrls: ['./madio-de-pago-create.component.css']
})
export class MadioDePagoCreateComponent implements OnInit {

  constructor( private medioDePagoService: MedioDePagoService,  ) { }

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
    this.medioDePagoService.createMedioDePago(medioDePago_create)
        .subscribe(() => {
            this.create.emit();
        }, err => {
        });
}

}
