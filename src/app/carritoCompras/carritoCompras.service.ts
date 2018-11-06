import {Injectable} from '@angular/core'
import {HttpClientModule, HttpClient} from '@angular/common/http'
import {CarritoCompras} from './carritoCompras'
import {Observable} from 'rxjs'
import {environment} from '../../environments/environment'

const APIURL="";

@Injectable()
export class CarritoComprasService{

   

    constructor(private http: HttpClient){}

    carritosCompras: CarritoCompras[]

    getCarritosCompras(): Observable<CarritoCompras[]>{
        return this.http.get<CarritoCompras[]>(APIURL);
        
    }
}