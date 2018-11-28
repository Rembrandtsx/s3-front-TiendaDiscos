import {Component, OnInit} from '@angular/core';
import { LoginService } from '../../UsuariosModule/services/login.service';
import {NgxPermissionsService } from 'ngx-permissions';
@Component({
    selector:"app-navbar",
    templateUrl:"./navbar.component.html",
    styleUrls:["./navbar.component.css"]
})
export class NavbarBarComponent implements OnInit{
    loggeado:boolean=false;
    abierto:boolean=false;
    constructor(private loginService: LoginService,private permissionsService: NgxPermissionsService){

    }
    ngOnInit(){
        if(this.loginService.currentUser!=null){
            this.loggeado = true;
        }
    }
    toggle(){
        if(this.abierto!=true){
            document.getElementById("side-panel").className = "side-panel"
            document.getElementById("side-panel").className += " open"
            this.abierto=!this.abierto
            return;
        }else{
            document.getElementById("side-panel").className = "side-panel"
            document.getElementById("side-panel").className += " close"
            this.abierto=!this.abierto 
        }
      

       

    }
    cerrar(){
       
  
    }



 
}