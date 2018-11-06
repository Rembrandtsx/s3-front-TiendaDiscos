import { Component, OnInit, Input } from '@angular/core';
import { TarjetaDeCredito } from '../tarjetadecredito';

@Component({
  selector: 'app-billinginformation-tarjetacredito-list',
  templateUrl: './billinginformation-tarjetacredito-list.component.html',
  styleUrls: ['./billinginformation-tarjetacredito-list.component.css']
})
export class BillinginformationTarjetacreditoListComponent implements OnInit {
  @Input() billingtarjetas : TarjetaDeCredito [];

  constructor() { }



  ngOnInit() {
  }

}
