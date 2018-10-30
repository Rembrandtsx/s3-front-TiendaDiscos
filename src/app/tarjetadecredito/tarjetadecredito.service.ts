import { Injectable } from  '@angular/core';
import {  HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TarjetaDeCredito } from './tarjetadecredito';


/**
 * URL para hacer la peticion HTTP
 */
const API_URL = '../../assets/JSON/JSONTarjetas.json';
const TARJETAS = "/tarjetas"
/**
 * El servicio que utiliza el modulo BillingInformation
 */
@Injectable()
export class TarjetaDeCreditoService {

    /**
     * Constructor del servicio
     * @param http -Requerido para pedir en la peticion de una lista de BillingInformation
     */
    constructor(private http: HttpClient ){ }

    /**
     * Obtiene todos los BillingInformation, que en este caso solo es uno
     */
    getTarjetasInformation(): Observable<TarjetaDeCredito[]>{
        return this.http.get<TarjetaDeCredito[]>(API_URL);
    }

} 