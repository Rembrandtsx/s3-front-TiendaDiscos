import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../services/usuario.service";
import { Usuario } from "../interfaces/usuario";
import { LoginService } from "../services/login.service";
@Component({
    selector: 'app-usuario',
    templateUrl:'./usuario.component.html',
    styleUrls:['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{
    
    usuarios:Usuario;

    constructor(private usuarioService:UsuarioService, private login : LoginService){

    }

    ngOnInit(){
        
    }
  
}
