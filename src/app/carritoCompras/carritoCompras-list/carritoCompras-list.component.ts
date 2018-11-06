import { Component, OnInit } from '@angular/core';
import {CarritoCompras} from '../carritoCompras'
import { CarritoComprasService} from '../carritoCompras.service'

@Component({
  selector: 'list-carritoCompras',
  templateUrl: './carritoCompras-list.html'
})
export class CarritoComprasListComponent implements OnInit {

  constructor(private carritoComprasService: CarritoComprasService) { }

  carritosCompras: CarritoCompras[]
  getCarritosCompras(): void {
    this.carritoComprasService.getCarritosCompras().subscribe(carritoCompras=>this.carritosCompras=carritoCompras);
  }
  ngOnInit() {
    this.getCarritosCompras();
  }

}
