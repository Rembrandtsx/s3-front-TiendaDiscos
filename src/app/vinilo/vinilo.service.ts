import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vinilo } from './vinilo';
import { Observable } from 'rxjs';

/**
 * URL para hacer la petición HTTP
 */
const API_URL = 'http://localhost:8080/s3_tiendadiscos-api/api/vinilos/usuarios/';

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
     * obtiene todos sus vinilos.
     */
    getVinilosUsuario(id): Observable<Vinilo[]> {
        return this.http.get<Vinilo[]>(API_URL+id);
    }

    /**
    * obtiene todos los vinilos de la tienda
    */
    getVinilos(): Observable<Vinilo[]> {
        return this.http.get<Vinilo[]>('http://localhost:8080/s3_tiendadiscos-api/api/vinilos/');
    }

    /**
     * El usuario crea un vinilo en su coleccion
     */
    createVinilos(vinilo,id): Observable<Vinilo> {
        return this.http.post<Vinilo>(API_URL+id, vinilo);
      }

    /**
     * El usuario modifica la información de uno de sus vinilos
     * @param vinilo Vinilo que remplaza el vinilo actual
     * @param tipo Complmento para el path 
     */
    updateVinilo(vinilo, tipo): Observable<Vinilo> {
        return this.http.put<Vinilo>(API_URL + tipo, vinilo);
     }
     /**
      * El usuario que creo el vinilo lo elimina de su coleccion
      * @param id id del vinilo a eliminar
      */
     deleteVinilo(id): Observable<Vinilo> {
        return this.http.delete<Vinilo>('http://localhost:8080/s3_tiendadiscos-api/api/vinilos/'+id);
    }
}
