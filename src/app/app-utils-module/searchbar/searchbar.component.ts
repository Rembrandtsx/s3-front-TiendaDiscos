import {Component, OnInit} from '@angular/core';
import { LoginService } from '../../UsuariosModule/services/login.service';
import { Router } from '@angular/router';




@Component({
    selector:"app-searchbar",
    templateUrl:"./searchbar.component.html",
    styleUrls:["./searchbar.component.css"]
})
export class SearchBarComponent implements OnInit{
    
    constructor(public auth: LoginService, public router:Router){

    }
    ngOnInit(){

    }
    logout(){
        console.log("salido");
        this.auth.logout();
        this.router.navigate(['/login'])
    }
}