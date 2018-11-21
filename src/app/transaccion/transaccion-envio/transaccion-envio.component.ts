import { Component, OnInit, Input } from '@angular/core';
import { Envio } from '../envio';

@Component({
    selector: 'app-transaccion-envio',
    templateUrl: './transaccion-envio.component.html',
//    styleUrls: ['./billinginformation-tarjetacredito-list.component.css']
  })
  export class TransaccionEnvioComponent implements OnInit {
   envio : Envio;
  
    constructor() { }
  
  
  
    ngOnInit() {
    }
  
  }
  
