import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../services/usuario.service";
import { Usuario } from "../interfaces/usuario";
@Component({
    selector: 'app-usuarios-list',
    templateUrl:'./usuario.component.html',
    styleUrls:['./usuario.component.css']
})
export class UsuarioListComponent implements OnInit{
    
    usuarios:Usuario[];

    constructor(private usuarioService:UsuarioService){

    }

    ngOnInit(){
        this.getUsuarios()
    }
    getUsuarios(): void{
        this.usuarioService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
    }
}
