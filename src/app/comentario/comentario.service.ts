import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Comentario } from './comentario';

@Injectable()
export class ComentarioService {

  constructor(private http: HttpClient){}

  getComentarios(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>('../../assets/comentarios.json');
    }
}