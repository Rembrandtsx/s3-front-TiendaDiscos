import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../services/usuario.service";
import { Usuario } from "../interfaces/usuario";
import { LoginService } from "../services/login.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: 'app-profile',
    templateUrl:'./profile.component.html',
    styleUrls:['./profile.component.css']
})
export class ProfileComponent implements OnInit{
    
    usuario:Usuario;
    usuarioId:number;
    constructor(public usuarioService:UsuarioService, public login : LoginService, private router:Router, private route: ActivatedRoute ){

    }

    ngOnInit(){
        this.usuarioId= +this.route.snapshot.paramMap.get('id');
        this.usuario= new Usuario();
        this.usuarioService.getUsuario(this.usuarioId).subscribe(c=>this.usuario=c)
    }
  
}