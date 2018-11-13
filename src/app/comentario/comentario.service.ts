import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Comentario } from './comentario';

@Injectable()
export class ComentarioService {

  constructor(private http: HttpClient){}

  tipo: String;


  getComentarios(): Observable<Comentario[]> {
    this.tipo = 'usuarios';
    return this.http.get<Comentario[]>('http://localhost:8080/s3_tiendadiscos-api/api/'+this.tipo+'/1/comentarios/');
    }
  createComentarios(comentario): Observable<Comentario>{
    return this.http.post<Comentario>('http://localhost:8080/s3_tiendadiscos-api/api/usuarios/1/comentarios/1',comentario)
  }
}