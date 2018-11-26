import {Component, OnInit, TemplateRef} from '@angular/core';
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
    cities = [
        {id: 1, name: 'Vilnius', avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'},
        {id: 2, name: 'Kaunas', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15'},
        {id: 3, name: 'Pavilnys', avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'},
        {id: 4, name: 'Siauliai', avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'},
    ];
    cities2 = this.cities.slice();
    selectedCity2 = "";
    placeholder:string="Buscar";



    isCollapsed=false;

    model: any;
    searching = false;
    searchFailed = false;
    ListaVinilos:any[];
    nombreVinilos:any[];



    search = (text$: Observable<string>) =>
    text$.pipe(
        debounceTime(200),
        map(term => term === '' ? []
          : this.ListaVinilos.filter(v => v.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
      )
  
    formatter = (x: Vinilo) => x.nombre;


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