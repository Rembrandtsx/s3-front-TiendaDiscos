import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from "../interfaces/usuario";
import { UsuarioService } from "./usuario.service";
import { Router } from "@angular/router";


const API_URL = '../../assets/JSON/usuariosEjemplo.json';

@Injectable()
export class LoginService{
    //currentUser:Usuario=null;
    currentUser:Usuario={
        username:"as",
        email:"as",
        nombre:"as",
        calificacion:3.5,
        contrasenha:"2312",
        direccion:"asdsa",
        rol:"A",
        imagen:"data:image/png;base64,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"
    };

    constructor(private http: HttpClient, private usuariosObservable: UsuarioService, private router: Router){
        
    }
    login(email,contrasenha){
        var usuariosObtenidos:Usuario[];
        let something = this.usuariosObservable.getUsuarios().subscribe(
            usuarios=>{
                
                usuariosObtenidos=usuarios
                this.validarDatos(usuariosObtenidos, email, contrasenha)
            })
        
       
        
    }
    validarDatos(usuariosObtenidos, email,contrasenha){
        usuariosObtenidos.forEach(x=>{
            console.log(x)
            if(x.email == email){
                if(x.contrasenha== contrasenha){
                    this.currentUser = x;
                    this.router.navigate(['/me'])
                }
                else{
                    //Implementar Alertas
                    console.log("contraseña invalida bby")
                }
            }else{
                //Implementar Alertas
                console.log("Email no registrado")
            }
        })
    }
    logout(){
        this.currentUser= null;
    }
    getUserObject():Usuario{
        return this.currentUser;
    }
}