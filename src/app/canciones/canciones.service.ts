import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Canciones } from './canciones';
import { Observable } from 'rxjs';

/**
 * URL para hacer la petición HTTP
 */
const API_URL = '../../assets/JSON/cancionesEjemplo.json';

/**
 * El servicio que utiliza el modulo canciones.
 */
@Injectable()
export class CancionesService{

    /**
     * Constructor del servicio
     * @param http - Requerido para pedir en la petición una lista de canciones.
     */
    constructor(private http : HttpClient){}

    /**
     * obtiene todos las canciones.
     */
    getCanciones(): Observable<Canciones[]> {
        return this.http.get<Canciones[]>(API_URL);
    }
}