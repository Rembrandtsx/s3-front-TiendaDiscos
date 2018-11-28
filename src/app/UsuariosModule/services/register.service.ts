import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from "../interfaces/usuario";
import { environment } from "../../../environments/environment.prod";
import { httpFactory } from "@angular/platform-server/src/http";


const API_URL = environment.apiUrl;



@Injectable()
export class RegisterService{
    constructor(private http: HttpClient){

    }

    crearUsuario(usuario:Usuario):Observable<Usuario>{
        return this.http.post<Usuario>(API_URL+"usuarios", usuario);
    }

    
}