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
        rol:"A"
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