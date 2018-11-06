import { Component, OnInit } from '@angular/core';
import { CarritoComprasService} from '../carrito-compras.service'
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router'
import { CarritoComprasDetail } from '../carrito-compras-detail';
@Component({
  selector: 'detail-carrito-compras',
  templateUrl: './carrito-compras-detail.component.html',
  styles: []
})
export class CarritoComprasDetailComponent implements OnInit {

  constructor (private carritoComprasService: CarritoComprasService, private route: ActivatedRoute){ }

  carritoComprasid: number;
  carritoComprasDetail: CarritoComprasDetail[];

  getCarritoComprasDetail():void{
  this.carritoComprasService.getCarritosCompras().subscribe(carritoComprasDetail=>{this.carritoComprasDetail=carritoComprasDetail});

  }
  ngOnInit() {
    this.getCarritoComprasDetail();

  }}
