import { Component, OnInit,Input } from '@angular/core';
import { CarritoComprasService} from '../carrito-compras.service'
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router'
import { CarritoComprasDetail } from '../carrito-compras-detail';
import { Vinilo } from '../../vinilo/vinilo';
import { TransaccionDetail } from '../../transaccion/transaccion-detail';
import { Usuario } from '../../UsuariosModule/interfaces/usuario';
import { allowSanitizationBypass } from '@angular/core/src/sanitization/bypass';
import { Observable } from 'rxjs';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
import { TarjetaDeCredito } from '../../billinginformation/tarjetadecredito';
import { BillingInformation } from '../../billinginformation/billinginformation';

@Component({
  selector: 'detail-carrito-compras',
  templateUrl: './carrito-compras-detail.component.html',
  styleUrls: ['./carrito-compras-detail.component.css']
})
export class CarritoComprasDetailComponent implements OnInit {

  constructor (private carritoComprasService: CarritoComprasService, private router: Router){ }

  carritoComprasid: number;
  carritoComprasDetail: CarritoComprasDetail;
 transaccionesDetail: TransaccionDetail[];
 transaccionActual: TransaccionDetail;
 usuarioActual: Usuario;
 usuarioVendedorActual:Usuario;
 showListVinilos:boolean;
 showListTrans:boolean;
 showOpPago:boolean;
 tarjetas: TarjetaDeCredito[];
 billing: BillingInformation;
 
  getCarritoComprasDetail():void{
  this.carritoComprasService.getCarritoComprasDetail(this.carritoComprasid).subscribe(carritoComprasDetail=>{this.carritoComprasDetail=carritoComprasDetail;});

  }
  generarTransaccion(){
    this.carritoComprasService.obtenerBilling().subscribe((bili)=>{this.billing=bili;this.carritoComprasService.obtenerTarjetas().subscribe((t)=>{this.tarjetas=t;this.mostrarOpPago();})} );
  }
  comprarT(){
    this.carritoComprasService.transaccionestemp= new Array<TransaccionDetail>();
    var i=0;
    
      for (let vinilo of this.carritoComprasDetail.vinilos) {
        
       this.carritoComprasService.comprar( "peticion", "tarjeta-credito", vinilo);
        i=i+1;
      }
      
      
  }
  
   obtenerPTransacciones(){
     const t= new Observable((observer)=>{
       observer.next(
    this.carritoComprasService.getUsuarioComprador().subscribe((usu)=>{
    var i=0;
    for (let vinilo of this.carritoComprasDetail.vinilos) {
      this.carritoComprasService.getUsuario(vinilo.usuario.id).subscribe((usuV)=>
      {
      this.transaccionActual= new TransaccionDetail();
      this.transaccionActual.estado= "Peticion";
      this.transaccionActual.formaDePago="tarjeta-credito";
      this.transaccionActual.vinilo=vinilo;
      this.transaccionActual.usuarioComprador= usu;
      this.transaccionActual.usuarioVendedor= usuV;
      this.transaccionesDetail[i]=new TransaccionDetail();
      this.transaccionesDetail[i]=this.transaccionActual;
      });
      i=i+1;

    };}
    ));
    
    observer.complete();
    
  });
  t.subscribe(()=>{});
}
  obtenerUsuarioVendedorActual(id:number){
    this.carritoComprasService.getUsuario(id).subscribe((usu)=> this.usuarioVendedorActual= usu);
      
  }
  mostrarTransacciones(){
    this.showListVinilos=false;
    this.showListVinilos=false;
    this.showListTrans=true;
  }
  mostrarCarrito(){
    this.showListTrans=false;
    this.showOpPago=false;
    this.showListVinilos=true;
  }
  verbilling(){
    this.router.navigate(['/billing']);
  }
 obtenerUsuarioActual(){
   this.carritoComprasService.getUsuarioComprador().subscribe((usu)=>this.usuarioActual=usu);
 }
  cancelar(){
    this.showListVinilos=true;
    this.showListTrans=false;
    this.carritoComprasService.transaccionestemp= new Array<TransaccionDetail>();
  }
  mostrarOpPago(){
    this.showListVinilos=false;
    this.showListTrans=true;
    this.showOpPago=true;
  }
  obtenerCostoCarrito(){
  var rta=0;
    this.carritoComprasDetail.vinilos.forEach(element => {
      rta+= element.precio;
    });
    return rta;
  }
  ngOnInit() {
    this.showListTrans=false;
    this.showListVinilos=true;
    this.showOpPago=false;

  
    
    this.carritoComprasid=3;
    this.carritoComprasDetail=new CarritoComprasDetail();
    this.transaccionesDetail=new Array<TransaccionDetail>();
    
    this.usuarioActual= new Usuario();
    this.getCarritoComprasDetail();
    
    }}
