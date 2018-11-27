import {Component, OnInit, TemplateRef, EventEmitter} from '@angular/core';
import { LoginService } from '../../UsuariosModule/services/login.service';
import { Router } from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
import { ViniloService } from '../../vinilo/vinilo.service';
import { Overlay } from '../../canciones/overlay';
import { Vinilo } from '../../vinilo/vinilo';
import { NgSelectConfig } from '@ng-select/ng-select';




@Component({
    selector:"app-searchbar",
    templateUrl:"./searchbar.component.html",
    styleUrls:["./searchbar.component.css"]
})
export class SearchBarComponent implements OnInit{


   
    
    
    constructor(private config: NgSelectConfig,public auth: LoginService, public router:Router, private vinilos:ViniloService, private overlay: Overlay){
        this.config.notFoundText = 'No encontramos un vinilo con ese nombre';
    }
   



    isCollapsed=false;

    model: any;
    searching = false;
    searchFailed = false;
    ListaVinilos:any[];
    nombreVinilos:any[];



  


    ngOnInit(){
        
        this.vinilos.getVinilos().subscribe(vin=>{
            this.ListaVinilos= vin
            this.nombreVinilos= this.ListaVinilos.map(v=>v.nombre);
        
        });

        
    }
 
    logout(){
        console.log("salido");
        this.auth.logout();
        this.router.navigate(['/login'])
    }
    toogle():void{
        this.overlay.toogleMenu();
        
        document.getElementById("menu").classList.toggle("clickMenuFive");
        
    }




}