import { Component,OnInit } from "@angular/core";
import { LoginService } from "../../UsuariosModule/services/login.service";
import { Usuario } from "../../UsuariosModule/interfaces/usuario";

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit{
    credenciales:Usuario={
        username:"",
        email:"",
        contrasenha:""
    };
    constructor(public auth: LoginService){
        
    }
    ngOnInit(){
        
    }

    login(){

        this.auth.login(this.credenciales.email,this.credenciales.contrasenha);
        
    }
}