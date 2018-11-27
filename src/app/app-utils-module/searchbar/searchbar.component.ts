import {Component, OnInit, TemplateRef} from '@angular/core';
import { LoginService } from '../../UsuariosModule/services/login.service';
import { Router } from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
import { ViniloService } from '../../vinilo/vinilo.service';
import { Overlay } from '../../canciones/overlay';




@Component({
    selector:"app-searchbar",
    templateUrl:"./searchbar.component.html",
    styleUrls:["./searchbar.component.css"]
})
export class SearchBarComponent implements OnInit{



    
    
    constructor(public auth: LoginService, public router:Router, private vinilos:ViniloService, private overlay: Overlay){

    }
    isCollapsed=false;

    model: any;
    searching = false;
    searchFailed = false;
    ListaVinilos:any[];
    nombreVinilos:any[];



    search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      map(term => term.length < 2 ? []
        : this.nombreVinilos.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)),
      tap(() => this.searching = false),  
    )


    ngOnInit(){
        
        this.vinilos.getVinilos(1).subscribe(vin=>{
            this.ListaVinilos= vin
            this.nombreVinilos= this.ListaVinilos.map(v=>v.nombre);
        
        });

        
    }
    llenarLista(){
        this.nombreVinilos= this.ListaVinilos.map(v=>v.nombre);
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