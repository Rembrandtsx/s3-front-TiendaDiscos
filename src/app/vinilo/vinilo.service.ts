import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vinilo } from './vinilo';
import { Observable } from 'rxjs';

/**
 * URL para hacer la petición HTTP
 */
const API_URL = 'http://localhost:8080/s3_tiendadiscos-api/api/vinilos/';

/**
 * El servicio que utiliza el modulo vinilo.
 */
@Injectable()
export class ViniloService{

    /**
     * Constructor del servicio
     * @param http - Requerido para pedir en la petición una lista de vinilos.
     */
    constructor(private http : HttpClient){}

    /**
     * obtiene todos los vinilos.
     */
    getVinilos(): Observable<Vinilo[]> {
        return this.http.get<Vinilo[]>(API_URL);
    }
}