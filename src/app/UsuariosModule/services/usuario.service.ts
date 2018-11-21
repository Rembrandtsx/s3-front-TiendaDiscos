import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from "../interfaces/usuario";

 

const API_URL2= 'http://localhost:8080/s3_tiendadiscos-api/api/usuarios/';
const API_URL = '../../assets/JSON/usuariosEjemplo.json';


@Injectable()
export class UsuarioService{
    constructor(private http: HttpClient){

    }


    getUsuarios(): Observable<Usuario[]>{
       return this.http.get<Usuario[]>(API_URL2)
    };
}