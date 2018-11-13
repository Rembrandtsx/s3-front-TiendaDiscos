import {Injectable} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {CarritoComprasDetail} from './carrito-compras-detail';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Vinilo} from '../vinilo/vinilo';
const API_URL=".././assets/vinilosCarritoCompras.json";
const API_URL2 = '.././assets/vinilosejemplo.json';

@Injectable()
export class CarritoComprasService{

   

    constructor(private http: HttpClient){}
    carritoCompras: CarritoComprasDetail;
    carritosCompras: CarritoComprasDetail[];

    getCarritosCompras(): Observable<CarritoComprasDetail[]>{
        return this.http.get<CarritoComprasDetail[]>(API_URL);
        
    }
    getCarritoComprasDetail(carritoComprasId):Observable<CarritoComprasDetail>{
        return this.http.get<CarritoComprasDetail>(API_URL);
    }
    
}