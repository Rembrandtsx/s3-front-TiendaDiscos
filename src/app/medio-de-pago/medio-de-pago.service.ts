import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


const API_URL = '../../assets/JSON/JSONBilling.json';

@Injectable()
export class MedioDePagoService {

  /**
     * Constructor del servicio
     * @param http -Requerido para pedir algo de medio de pago
     */
    constructor(private http: HttpClient ){ }


        /**
     * Crear un nuevo medio de pago
     * @param medioDePago el nuevo medio de pago
     */
   createMedioDePago(medioDePago): Observable<boolean> {
    return this.http.post<boolean>(API_URL+"2",medioDePago);
   }


}