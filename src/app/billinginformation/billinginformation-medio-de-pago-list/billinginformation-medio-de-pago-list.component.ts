import { Component, OnInit, Input } from '@angular/core';
import { MedioDePago } from '../../medio-de-pago/medioDePago';

@Component({
  selector: 'app-billinginformation-medio-de-pago-list',
  templateUrl: './billinginformation-medio-de-pago-list.component.html',
  styleUrls: ['./billinginformation-medio-de-pago-list.component.css']
})
export class BillinginformationMedioDePagoListComponent implements OnInit {
  @Input() billingtarjetas : MedioDePago [];

  constructor() { }



  ngOnInit() {
  }

}
