import { Component, OnInit } from '@angular/core';
import { Transaccion } from '../transaccion';
import { TransaccionService}  from '../transaccion.service';

@Component({
  selector: 'list-transacciones',
  templateUrl: './transaccion-list.component.html',
})
export class TransaccionListComponent implements OnInit {

  constructor(private transaccionService: TransaccionService ) { }

  transacciones: Transaccion[];

  getTransacciones(): void{
    this.transaccionService.getTransacciones().subscribe(transacciones => this.transacciones= transacciones);
  }
  ngOnInit() {
    this.getTransacciones();
  }

}
