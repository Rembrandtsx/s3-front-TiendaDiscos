import { Injectable } from  '@angular/core';
import {  HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillingInformation } from './billinginformation';


/**
 * URL para hacer la peticion HTTP
 */
const API_URL = '../../assets/JSON/JSONBilling.json';
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

    getBillingInformationDetail(): Observable<BillingInformation> {
        return this.http.get<BillingInformation>(API_URL);
    }
} 