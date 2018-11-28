import {Injectable} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {CarritoComprasDetail} from './carrito-compras-detail';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Vinilo} from '../vinilo/vinilo';
import {TransaccionDetail} from '../transaccion/transaccion-detail';
import { LoginService } from '../UsuariosModule/services/login.service';
import { Usuario } from '../UsuariosModule/interfaces/usuario';
import { BillingInformation } from '../billinginformation/billinginformation';
import { TarjetaDeCredito } from '../billinginformation/tarjetadecredito';
import { CarritoCompras } from './carrito-compras';

const API_URL='../../assets/carritoCompras.json';
const URL="http://localhost:8080/s3_tiendadiscos-api/api/transacciones";
const URLUSUARIO="http://localhost:8080/s3_tiendadiscos-api/api/usuarios/";




@Injectable()
export class CarritoComprasService{

   

    constructor(private http: HttpClient, private auth: LoginService){
        this.transaccionestemp=new Array<TransaccionDetail>();
    }
   transacciontemp: TransaccionDetail ;
   transaccionestemp: TransaccionDetail[] ;
   
   usuarioComprador: Usuario;
   usuarioVendedor:Usuario;
    postCarritoCompras(carritoCompras:CarritoCompras, usuarioId:number): Observable<CarritoCompras>{
        return this.http.post<CarritoCompras>(URLUSUARIO+`${usuarioId}/carrito`, carritoCompras);
    }

   eliminarViniloDeCarritoCompras(id):Observable<CarritoComprasDetail>{
       return this.http.delete<CarritoComprasDetail>(URLUSUARIO+this.auth.currentUser.id+"/carrito/vinilos/"+id);

   }
    getCarritosCompras(): Observable<CarritoComprasDetail[]>{
        return this.http.get<CarritoComprasDetail[]>(API_URL);
        
    }
    getCarritoComprasDetail():Observable<CarritoComprasDetail>{
        return this.http.get<CarritoComprasDetail>(URLUSUARIO+this.auth.currentUser.id+"/carrito");
    }
    getUsuario(id):Observable<Usuario>{
        return this.http.get<Usuario>(URLUSUARIO+id );
    }
    getUsuarioComprador():Observable<Usuario>{
        return this.http.get<Usuario>(URLUSUARIO+this.auth.currentUser.id );
    }
    comprarT( tran:TransaccionDetail): Observable<TransaccionDetail>{
       
        return this.http.post<TransaccionDetail>(URL,tran);
    }
    obtenerBilling():Observable<BillingInformation>{
        return this.http.get<BillingInformation>(URLUSUARIO+this.auth.currentUser.id+"/billing" );
    }
    obtenerTarjetas():Observable<TarjetaDeCredito[]>{
        return this.http.get<TarjetaDeCredito[]>(URLUSUARIO+this.auth.currentUser.id+"/billing/tarjetasDeCredito" );
    }
    obtenerBillingU(id: number):Observable<BillingInformation>{
        return this.http.get<BillingInformation>(URLUSUARIO+id+"/billing" );
    }
    actualizarBilling(bill: BillingInformation):Observable<BillingInformation>{
        return this.http.put<BillingInformation>(URLUSUARIO+this.auth.currentUser.id+"/billing" , bill);
    }
    actualizarBillingU(id: number, bill: BillingInformation):Observable<BillingInformation>{
        return this.http.put<BillingInformation>(URLUSUARIO+id+"/billing" , bill);
    }
    tarjeta(bill: TarjetaDeCredito):Observable<BillingInformation>{
        return this.http.post<BillingInformation>(URLUSUARIO+this.auth.currentUser.id+"/billing/tarjetasDeCredito" , bill);
    }
    comprar( estado: string, formaPago:string, vinilo:Vinilo){
        this.transacciontemp= new TransaccionDetail();
        this.transacciontemp.estado=estado;
        this.transacciontemp.formaDePago=formaPago;
        this.transacciontemp.vinilo=vinilo;
        
       this.getUsuario( this.auth.currentUser.id).subscribe(
            (usuarioC)=>{ 
            this.usuarioComprador=usuarioC;
            this.getUsuario( ((vinilo.usuario!=undefined)?vinilo.usuario.id:1)).subscribe((usuarioV)=>{
                this.usuarioVendedor=usuarioV 
            
        this.transacciontemp.usuarioComprador=this.usuarioComprador;
        this.transacciontemp.usuarioVendedor=this.usuarioVendedor;

        console.log(this.transacciontemp);
        this.comprarT(this.transacciontemp).subscribe((u)=>{this.transaccionestemp.push(u); console.log(this.transaccionestemp); this.eliminarViniloDeCarritoCompras(vinilo.id).subscribe();});
            } );
        
        }
            
            );
        
       
    }
    
   
}