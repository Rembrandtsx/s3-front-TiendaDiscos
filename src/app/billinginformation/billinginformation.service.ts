import { Injectable } from  '@angular/core';
import {  HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillingInformation } from './billinginformation';


/**
 * URL para hacer la peticion HTTP
 */
const API_URL = 'http://localhost:8080/s3_tiendadiscos-api/api/usuarios/23/billing';
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
    constructor(private http: HttpClient ){ }

    /**
     * Obtiene todos los BillingInformation, que en este caso solo es uno
     */
    getBillingsInformation(): Observable<BillingInformation[]>{
        return this.http.get<BillingInformation[]>(API_URL);
    }
    
 
      
    /**
     * Retorna el detail del billing
     * @param billingId 
    */
    getBillingInformationDetail(billingId): Observable<BillingInformation> {
        return this.http.get<BillingInformation>(API_URL);
    }

    /**
     * Retorna los medios de pago
     * @param billingId id del billing
     
    getMediosDePagoDeBilling(billingId): Observable<MedioDePago[]>{
        return this.http.get<MedioDePago[]>(API_URL);

    }
 

    /**
     * Crear un nuevo medio de pago
     * @param medioDePago el nuevo medio de pago
     */
   createMedioDePago(medioDePago): Observable<boolean> {
    return this.http.post<boolean>(API_URL+"2",medioDePago);
}

createBilling(billing): Observable<BillingInformation> {
    return this.http.post<BillingInformation>(API_URL , billing);
}
} 