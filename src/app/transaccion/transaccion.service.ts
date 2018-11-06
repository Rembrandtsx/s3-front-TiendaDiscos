import { Injectable } from '@angular/core';
import {  HttpClientModule, HttpClient } from '@angular/common/http';
import { Transaccion } from './transaccion';
import { Observable } from 'rxjs';

/**
 * URL para hacer la petion HTTP
 */
const API_URL = '../../assets/transaccionesejemplo.json';
/**
 * El servicio que utiliza el modulo transaccion
 */
@Injectable()
export class TransaccionService {

    /**
     * Constructor del servicio
     * @param http -Requerido para pedir en la peticion de una lista de transacciones
     */
    constructor(private http: HttpClient ) { }

    /**
     * Obtiene todas las transacciones
     */
    getTransacciones (): Observable<Transaccion[]> {
        return this.http.get<Transaccion[]>( API_URL);
    }
}
