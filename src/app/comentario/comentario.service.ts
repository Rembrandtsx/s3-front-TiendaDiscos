import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Comentario } from './comentario';
import { LoginService } from '../UsuariosModule/services/login.service';

@Injectable()
export class ComentarioService {

  constructor(private http: HttpClient,private auth: LoginService){}

  


  getComentarios(tipo:string, usuario:number): Observable<Comentario[]> {
    
    return this.http.get<Comentario[]>('http://localhost:8080/s3_tiendadiscos-api/api/'+tipo+'/'+usuario+'/comentarios/');
    }

  createComentarios(comentario,tipo:string, usuario:number,id:number): Observable<Comentario>{
    return this.http.post<Comentario>('http://localhost:8080/s3_tiendadiscos-api/api/'+tipo+'/'+usuario+'/comentarios/'+id,comentario)
  }

     /**
      * El usuario que creo el comentraio lo elimina de su coleccion
      * @param id id del comentario a eliminar
      */
     deleteVinilo(id): Observable<Comentario> {
      return this.http.delete<Comentario>('http://localhost:8080/s3_tiendadiscos-api/api/comentarios/'+id);
  }
}