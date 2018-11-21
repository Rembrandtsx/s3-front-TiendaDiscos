import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Canciones } from './canciones';
import { Observable } from 'rxjs';

/**
 * URL para hacer la petición HTTP
 */
const API_URL = 'http://localhost:8080/s3_tiendadiscos-api/api/vinilos/';

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
    getCanciones(tipo:string): Observable<Canciones[]> {
        console.log(API_URL + tipo);
        return this.http.get<Canciones[]>(API_URL+tipo);
    }

    createCanciones(cancion , tipo: string): Observable<Canciones> {

        return this.http.post<Canciones>(API_URL + tipo, cancion);
      }
          /**
    * Updates an author
    * @param author The author's information updated
    * @returns The confirmation that the author was updated
    */
    updateCancion(cancion, tipo): Observable<Canciones> {
        return this.http.put<Canciones>(API_URL + tipo, cancion);
    }
}