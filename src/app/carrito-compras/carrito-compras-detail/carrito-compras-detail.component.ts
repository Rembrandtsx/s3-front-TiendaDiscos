import { Component, OnInit,Input } from '@angular/core';
import { CarritoComprasService} from '../carrito-compras.service'
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router'
import { CarritoComprasDetail } from '../carrito-compras-detail';
import { Vinilo } from '../../vinilo/vinilo';
@Component({
  selector: 'detail-carrito-compras',
  templateUrl: './carrito-compras-detail.component.html',
  styleUrls: ['./carrito-compras-detail.component.css']
})
export class CarritoComprasDetailComponent implements OnInit {

  constructor (private carritoComprasService: CarritoComprasService, private route: ActivatedRoute){ }

  carritoComprasid: number;
  carritoComprasDetail: CarritoComprasDetail;
 
  getCarritoComprasDetail():void{
  this.carritoComprasService.getCarritoComprasDetail(this.carritoComprasid).subscribe(carritoComprasDetail=>{this.carritoComprasDetail=carritoComprasDetail});

  }
  
  ngOnInit() {
    this.carritoComprasid=3;
    this.carritoComprasDetail=new CarritoComprasDetail();
    this.getCarritoComprasDetail();
    }}
