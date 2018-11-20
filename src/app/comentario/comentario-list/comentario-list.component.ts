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

  comentario: Comentario[];

  @Input() tipo:string;

  @Input() id:number;
  
  showCreate: boolean;
  
  showHideCreate(): void {
    this.showCreate = !this.showCreate;
}

  getComentarios (): void {
    this.comentarioService.getComentarios(this.tipo, this.id).subscribe(comentarios => this.comentario = comentarios);
  }

  ngOnInit() {
    this.showCreate = false;
    this.getComentarios();
  }

}
