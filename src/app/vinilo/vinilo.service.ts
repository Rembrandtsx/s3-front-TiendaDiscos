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
     * obtiene todos los vinilos.
     */
    getVinilos(id): Observable<Vinilo[]> {
        return this.http.get<Vinilo[]>(API_URL+id);
    }

    /**
     * El usuario crea un vinilo
     */
    createVinilos(vinilo,id): Observable<Vinilo> {
        return this.http.post<Vinilo>(API_URL+id, vinilo);
      }
      updateVinilo(vinilo, tipo): Observable<Vinilo> {
        return this.http.put<Vinilo>(API_URL + tipo, vinilo);
     }

     deleteVinilo(id): Observable<Vinilo> {
        return this.http.delete<Vinilo>('http://localhost:8080/s3_tiendadiscos-api/api/vinilos/'+id);
    }
    }
