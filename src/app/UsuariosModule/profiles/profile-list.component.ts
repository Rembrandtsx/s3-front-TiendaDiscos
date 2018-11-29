import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../services/usuario.service";
import { Usuario } from "../interfaces/usuario";

@Component({
    selector:"app-profile-list",
    templateUrl:"./profile-list.component.html",
    styleUrls:['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit{
    usuarios:Usuario[];
    constructor(private usuarioService:UsuarioService){

    }
    ngOnInit(){
        this.usuarioService.getUsuarios().subscribe(x=>{this.usuarios=x
            console.log(this.usuarios);
        });
    }
}