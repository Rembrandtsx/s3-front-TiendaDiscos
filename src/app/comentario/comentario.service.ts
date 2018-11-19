import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Comentario } from './comentario';

@Injectable()
export class ComentarioService {

  constructor(private http: HttpClient){}

  


  getComentarios(tipo:string, usuario:number): Observable<Comentario[]> {
    
    return this.http.get<Comentario[]>('http://localhost:8080/s3_tiendadiscos-api/api/'+tipo+'/'+usuario+'/comentarios/');
    }
  createComentarios(comentario,tipo:string, usuario:number): Observable<Comentario>{
    return this.http.post<Comentario>('http://localhost:8080/s3_tiendadiscos-api/api/'+tipo+'/'+usuario+'/comentarios/1',comentario)
  }
}