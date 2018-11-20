import { Component,OnInit } from "@angular/core";
import { Usuario } from "../../UsuariosModule/interfaces/usuario";

@Component({
    selector:"app-register-user",
    templateUrl:"./register.component.html",
    styleUrls:["./register.component.css"]
})
export class RegisterComponent implements OnInit{

    credenciales:Usuario;
    constructor(){

    }
    ngOnInit(){

    }
    register(){
        
    }
}