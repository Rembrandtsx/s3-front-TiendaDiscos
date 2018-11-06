import {Injectable} from '@angular/core'
import {HttpClientModule, HttpClient} from '@angular/common/http'
import {CarritoCompras} from './carrito-Compras'
import {Observable} from 'rxjs'
import {environment} from '../../environments/environment'

const API_URL=".././assets/vinilosCarritoCompras.json";

@Injectable()
export class CarritoComprasService{

   

    constructor(private http: HttpClient){}

    carritosCompras: CarritoCompras[]

    getCarritosCompras(): Observable<CarritoCompras[]>{
        return this.http.get<CarritoCompras[]>(API_URL);
        
    }
    getCarritoComprasDetail(carritoComprasId):Observable<CarritoCompras>{
        return this.http.get<CarritoCompras>(API_URL);
    }
}