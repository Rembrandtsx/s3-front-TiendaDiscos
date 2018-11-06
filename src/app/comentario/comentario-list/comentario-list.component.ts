import { Component, OnInit, Input } from '@angular/core';
import {ComentarioService} from '../comentario.service';
import { Comentario } from '../comentario';

@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {

  constructor (private comentarioService: ComentarioService) { }

  @Input() comentario: Comentario[];

  getComentarios (): void {
    this.comentarioService.getComentarios().subscribe(comentarios => this.comentario = comentarios);
  }

  ngOnInit() {
    this.getComentarios();
  }

}
