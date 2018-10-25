import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { vinilo } from './Vinilo';
import { Observable } from 'rxjs';

/**
 * URL para hacer la petición HTTP
 */
const API_URL = '../../assets/vinilosejemplo.json';

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
    getVinilos(): Observable<vinilo[]> {
        return this.http.get<vinilo[]>(API_URL);
    }
}