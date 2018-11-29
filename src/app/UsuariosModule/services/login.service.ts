import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from "../interfaces/usuario";
import { UsuarioService } from "./usuario.service";
import { Router } from "@angular/router";
import {NgxRolesService, NgxPermissionsService} from 'ngx-permissions'





@Injectable()
export class LoginService{
    currentUser:Usuario=null;
 

    constructor(private http: HttpClient, private usuariosObservable: UsuarioService, private router: Router,  private roleService: NgxRolesService, private permissionsService: NgxPermissionsService){
        
    }
    login(email,contrasenha){
        var usuariosObtenidos:Usuario[];
        let something = this.usuariosObservable.getUsuarios().subscribe(
            usuarios=>{
                
                let usuariosObtenidos=usuarios
                usuariosObtenidos.forEach(x=>{
                    console.log(x)
                    if(x.email == email){
                        if(x.contrasenha== contrasenha){
                            this.currentUser = x;
                            localStorage.setItem("usuario", JSON.stringify(this.currentUser))
                            localStorage.setItem("rol", JSON.stringify(this.currentUser.rol));
                            this.roleService.addRole(localStorage.getItem("rol"), ['leave_review']);
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
                
            })
        
       
        
    }
    
    logout(){
        this.currentUser= null;
        localStorage.removeItem("usuario");
        localStorage.removeItem("rol")
    }
    getUserObject():Usuario{
        return this.currentUser;
    }









    // PERMISOS
    start (): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        this.permissionsService.loadPermissions(['edit_author_permission', 'delete_author_permission', 'leave_review']);
        if(localStorage.getItem("usuario")){
            const usuario = JSON.parse(localStorage.getItem('usuario'));
        console.log(usuario.rol)
        if(usuario){
            this.currentUser= usuario;
        }
        if (!usuario.rol) {
            this.setGuestRole();
        } else if (usuario.role === 'ADMIN') {
            this.setAdministratorRole();
        } else {
            this.setClientRole();
        }
        }
        
        
    }


    setGuestRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('GUEST', ['']);
    }

    setClientRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('USUARIO', ['leave_review']);
        localStorage.setItem('usuario', JSON.stringify(this.currentUser));
        localStorage.setItem("CambiooAlgo","cambió!")
        localStorage.setItem('rol',"USUARIO");
    }

    setAdministratorRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', ['edit_author_permission', 'delete_author_permission']);
        localStorage.setItem('usuario', JSON.stringify(this.currentUser));
        localStorage.setItem("CambiooAlgo","cambió!")
        localStorage.setItem('rol',"ADMIN");
    }

    printRole (): void {
        console.log(this.roleService.getRoles());
    }

}