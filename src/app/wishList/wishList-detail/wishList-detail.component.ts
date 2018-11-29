import { Component, OnInit,Input } from '@angular/core';

import { ActivatedRoute, Router, NavigationEnd} from '@angular/router'

import { Vinilo } from '../../vinilo/vinilo';
import { TransaccionDetail } from '../../transaccion/transaccion-detail';
import { Usuario } from '../../UsuariosModule/interfaces/usuario';
import { allowSanitizationBypass } from '@angular/core/src/sanitization/bypass';
import { Observable } from 'rxjs';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
import { TarjetaDeCredito } from '../../billinginformation/tarjetadecredito';
import { BillingInformation } from '../../billinginformation/billinginformation';
import { LoginService } from '../../UsuariosModule/services/login.service';
import { WishListService } from '../wishList.service';
import { WishListDetail } from '../wishListdetail';

@Component({
  selector: 'detail-WishList',
  templateUrl: './wishlist-detail.component.html',
  styleUrls: ['./wishlist-detail.component.css']
})
export class WishListDetailComponent implements OnInit {

  constructor (private wishListDetailService: WishListService, private router: Router, private auth: LoginService){ }

  wishListDetailid: number;
  wishListDetail: WishListDetail;
 transaccionesDetail: TransaccionDetail[];
 transaccionActual: TransaccionDetail;
 usuarioActual: Usuario;
 usuarioVendedorActual:Usuario;
 showListVinilos:boolean;
 showListTrans:boolean;
 showOpPago:boolean;
 showResumen:boolean;
 tarjetas: TarjetaDeCredito[];
 billing: BillingInformation;
 
  getWishListDetail():void{
  this.wishListDetailService.getWishListDetail().subscribe(carritoComprasDetail=>{this.wishListDetail=carritoComprasDetail;});

  }
  generarTransaccion(){
    this.wishListDetailService.obtenerBilling().subscribe((bili)=>{this.billing=bili;this.wishListDetailService.obtenerTarjetas().subscribe((t)=>{this.tarjetas=t;this.mostrarOpPago();
      })} );
  }
  comprarT(){
    this.billing.spent=this.billing.spent+this.obtenerCostoCarrito();
    this.billing.tarjetasDeCredito=this.tarjetas;
    console.log(this.billing);
    this.wishListDetailService.actualizarBilling(this.billing).subscribe();
    this.tarjetas.forEach((t)=>this.wishListDetailService.tarjeta(t).subscribe());

    this.wishListDetailService.transaccionestemp= new Array<TransaccionDetail>();
    var i=0;
    
      for (let vinilo of this.wishListDetail.vinilos) {
        
       this.wishListDetailService.comprar( "peticion", "tarjeta-credito", vinilo);
        i=i+1;
      }
      
      
  }
  
   obtenerPTransacciones(){
     const t= new Observable((observer)=>{
       observer.next(
    this.wishListDetailService.getUsuarioComprador().subscribe((usu)=>{
    var i=0;
    for (let vinilo of this.wishListDetail.vinilos) {
      this.wishListDetailService.getUsuario(((vinilo.usuario!=undefined)?vinilo.usuario.id:1)).subscribe((usuV)=>
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
    this.wishListDetailService.getUsuario(id).subscribe((usu)=> this.usuarioVendedorActual= usu);
      
  }
  mostrarTransacciones(){
    this.showListVinilos=false;
    this.showListVinilos=false;
    this.showListTrans=true;
  }
  mostrarWishListDetail(){
    this.showListTrans=false;
    this.showOpPago=false;
    this.showListVinilos=true;
  }
  verbilling(){
    this.router.navigate(['/billing']);
  }
  verT(){
    this.router.navigate(['/transacciones']);
  }
  verL(){
    this.router.navigate(['/login']);
  }
 obtenerUsuarioActual(){
   this.wishListDetailService.getUsuarioComprador().subscribe((usu)=>this.usuarioActual=usu);
 }
  cancelar(){
    this.showListVinilos=true;
    this.showListTrans=false;
    this.wishListDetailService.transaccionestemp= new Array<TransaccionDetail>();
  }
  mostrarOpPago(){
    this.showListVinilos=false;
    this.showListTrans=true;
    this.showOpPago=true;
  }
  mostrarResumen(){
    this.showListTrans=true;
    this.showListVinilos=false;
    this.showOpPago=false;
    this.showResumen=true;
    this.comprarT();
  }
  obtenerCostoCarrito(): number{
  var rta=0;
    this.wishListDetail.vinilos.forEach(element => {
      rta+= element.precio;
    });
    return rta;
  }
  ngOnInit() {
    if(this.auth.currentUser!=undefined){
    this.showListTrans=false;
    this.showListVinilos=true;
    this.showOpPago=false;
this.showResumen=false;
  
    
    this.wishListDetail=new WishListDetail();
    this.transaccionesDetail=new Array<TransaccionDetail>();
    
    this.usuarioActual= new Usuario();
    this.getWishListDetail();
    this.obtenerUsuarioActual();
    }else{
      this.verL();
    }}
  }

