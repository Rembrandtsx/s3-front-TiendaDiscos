import { Component, OnInit, Input } from '@angular/core';
import {ComentarioService} from '../comentario.service';
import { Comentario } from '../comentario';
import {  Router } from '@angular/router';
import { LoginService } from '../../UsuariosModule/services/login.service'
@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {

  constructor (private comentarioService: ComentarioService,private router: Router,private login : LoginService ) { }

  comentario: Comentario[];

  itsMe : boolean;

  @Input() tipo:string;

  @Input() id:number;
  
  showCreate: boolean;
  
  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }


  soyYo(id):boolean{
    if(this.login.getUserObject()){
    return id===this.login.getUserObject().id;}
    return false;
  }

  getComentarios (): void {
    this.comentarioService.getComentarios(this.tipo, this.id).subscribe(comentarios => this.comentario = comentarios);
  }

  deleteComentarios(id) : void {
    this.comentarioService.deleteVinilo(id).subscribe(obj => this.router.navigate([this.tipo+"/"+this.id]))
  }

  ngOnInit() {
    this.showCreate = false;
    this.getComentarios();


  }

}
