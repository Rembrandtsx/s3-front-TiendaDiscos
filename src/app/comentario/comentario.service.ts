import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Comentario } from './comentario';
import { LoginService } from '../UsuariosModule/services/login.service';

@Injectable()
export class ComentarioService {

  constructor(private http: HttpClient,private auth: LoginService){}

  tipo: String;


  getComentarios(): Observable<Comentario[]> {
    this.tipo = 'usuarios';
    return this.http.get<Comentario[]>('http://localhost:8080/s3_tiendadiscos-api/api/'+this.tipo+'/1/comentarios/');
    }
  createComentarios(comentario): Observable<Comentario>{

    



    return this.http.post<Comentario>('http://localhost:8080/s3_tiendadiscos-api/api/usuarios/1/comentarios/'+this.auth.getUserObject().id,comentario)
  }
}