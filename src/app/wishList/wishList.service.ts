import {Injectable} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Vinilo} from '../vinilo/vinilo';
import {TransaccionDetail} from '../transaccion/transaccion-detail';
import { LoginService } from '../UsuariosModule/services/login.service';
import { Usuario } from '../UsuariosModule/interfaces/usuario';
import { BillingInformation } from '../billinginformation/billinginformation';
import { TarjetaDeCredito } from '../billinginformation/tarjetadecredito';
import { Envio } from '../transaccion/envio';
import { WishListDetail } from './wishListdetail';
import { WishList } from './wishList';

const API_URL='../../assets/carritoCompras.json';
const URL="http://localhost:8080/s3_tiendadiscos-api/api/transacciones/";
const URLUSUARIO="http://localhost:8080/s3_tiendadiscos-api/api/usuarios/";




@Injectable()
export class WishListService{

   

    constructor(private http: HttpClient, private auth: LoginService){
        this.transaccionestemp=new Array<TransaccionDetail>();
    }
   transacciontemp: TransaccionDetail ;
   transaccionestemp: TransaccionDetail[] ;
   envioTemp: Envio;
   usuarioComprador: Usuario;
   usuarioVendedor:Usuario;
   billingTemp: BillingInformation;
    
   postWishList(w:WishList, usuarioId:number): Observable<WishList>{
        return this.http.post<WishList>(URLUSUARIO+`${usuarioId}/wishlist`, w);
    }
    postEnvio(envio:Envio, id:number): Observable<Envio>{
        return this.http.post<Envio>(URL+id+"/envio", envio);
    }

    agregarViniloDeWishListDetail( v:Vinilo):Observable<WishListDetail>{
        return this.http.post<WishListDetail>(URLUSUARIO+this.auth.currentUser.id+"/wishlist/vinilos/"+v.id, v);
 
    }
   eliminarViniloDeWishListDetail(id):Observable<WishListDetail>{
       return this.http.delete<WishListDetail>(URLUSUARIO+this.auth.currentUser.id+"/wishlist/vinilos/"+id);

   }
    getWishsListDetail(): Observable<WishListDetail[]>{
        return this.http.get<WishListDetail[]>(API_URL);
        
    }
    getWishListDetail():Observable<WishListDetail>{
        return this.http.get<WishListDetail>(URLUSUARIO+this.auth.currentUser.id+"/wishlist");
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
        this.comprarT(this.transacciontemp).subscribe((u)=>{this.transaccionestemp.push(u); console.log(this.transaccionestemp); 
            this.envioTemp=new Envio();
            this.envioTemp.direccionEntrega=usuarioC.direccion;
            this.envioTemp.direccionSalida=usuarioV.direccion;
            this.envioTemp.posicionActual=usuarioV.direccion;

            this.envioTemp.estado="PROGRESO";
            this.envioTemp.id=1;

            this.postEnvio(this.envioTemp, u.id).subscribe( ()=>{this.eliminarViniloDeWishListDetail(vinilo.id).subscribe();});
            });
            } );
        
        }
            
            );
        
       
    }
    
   
}
