import { Component, OnInit } from '@angular/core';
import { TarjetaDeCreditoService } from '../tarjetadecredito.service';
import { TarjetaDeCredito } from '../tarjetadecredito';

@Component({
  selector: 'app-tarjetadecredito-list',
  templateUrl: './tarjetadecredito-list.component.html',
  styleUrls: ['./tarjetadecredito-list.component.css']
})
export class TarjetadecreditoListComponent implements OnInit {

  /**
   * constructor para el componente
   * @param tarjetaDeCreditoService El proveedor de servicios de tarjeta de credito 
   */
  constructor(private tarjetaDeCreditoService:TarjetaDeCreditoService) { }

  /**
   * Lista de los billing 
   */
  tarjertas: TarjetaDeCredito[];


  /**
   * Pregunta al servicio para actualizar la lista de billingInformation
   */
  getTarjetasInformation(): void {
    this.tarjetaDeCreditoService.getTarjetasInformation().subscribe(tarjertas => this.tarjertas = tarjertas );
    }
  ngOnInit() {

    
    this.getTarjetasInformation();
  }


}
