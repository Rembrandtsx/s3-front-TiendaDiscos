import { Injectable } from  '@angular/core';
import {  HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillingInformation } from './billinginformation';
import { environment } from '../../environments/environment.prod';
import { LoginService } from '../UsuariosModule/services/login.service';
import { TarjetaDeCredito } from './tarjetadecredito';


/**
 * URL para hacer la peticion HTTP
 */
const API_URL = environment.apiUrl;
//const BILLINGS = "/billing"
/**
 * El servicio que utiliza el modulo BillingInformation
 */
@Injectable()
export class BillingInformationService {

    /**
     * Constructor del servicio
     * @param http -Requerido para pedir en la peticion de una lista de BillingInformation
     */
    constructor(private http: HttpClient ,private login : LoginService){ }

    /**
     * Obtiene todos los BillingInformation, que en este caso solo es uno
     */
    getBillingsInformation(): Observable<BillingInformation[]>{
        return this.http.get<BillingInformation[]>(API_URL+'usuarios/'+this.login.getUserObject().id+'/billing');
    }

    getBillingInformationDetail(): Observable<BillingInformation> {
        return this.http.get<BillingInformation>(API_URL+'usuarios/'+this.login.getUserObject().id+'/billing');
    }
    postBillingInformation(billing:BillingInformation, usuarioId:number): Observable<BillingInformation>{
        return this.http.post<BillingInformation>(API_URL+`usuarios/${usuarioId}/billing`,billing)
    }
    postTarjeta(billing:TarjetaDeCredito): Observable<TarjetaDeCredito>{
        return this.http.post<TarjetaDeCredito>(API_URL+'usuarios/'+this.login.getUserObject().id+'/billing/tarjetasDeCredito',billing)
    }
    getTarjeta(): Observable<TarjetaDeCredito[]> {
        return this.http.get<TarjetaDeCredito[]>(API_URL+'usuarios/'+this.login.getUserObject().id+'/billing/tarjetasDeCredito/');
    }

    updateTarjeta(tarjeta:TarjetaDeCredito, id:number): Observable<TarjetaDeCredito> {
        return this.http.put<TarjetaDeCredito>('http://localhost:8080/s3_tiendadiscos-api/api/usuarios/'+
        this.login.getUserObject().id+'/billing/tarjetasDeCredito/' + id, tarjeta);
     }
} 