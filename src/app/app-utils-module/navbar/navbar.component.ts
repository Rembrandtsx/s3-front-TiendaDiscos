import {Component, OnInit} from '@angular/core';
import { LoginService } from '../../UsuariosModule/services/login.service';

@Component({
    selector:"app-navbar",
    templateUrl:"./navbar.component.html",
    styleUrls:["./navbar.component.css"]
})
export class NavbarBarComponent implements OnInit{
    loggeado:boolean=false;
    constructor(private loginService: LoginService){

    }
    ngOnInit(){
        if(this.loginService.currentUser!=null){
            this.loggeado = true;
        }
    }
}