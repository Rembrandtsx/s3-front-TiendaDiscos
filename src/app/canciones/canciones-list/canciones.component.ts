import { Component, OnInit, OnDestroy } from '@angular/core';
import { Canciones } from '../canciones';
import { CancionesService } from '../canciones.service';
import { Overlay } from '../overlay';

@Component({
  selector: 'list-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: [ './canciones.component.css']
})
export class CancionesComponent implements OnInit,OnDestroy {

  constructor(private cancionesService : CancionesService,private overlay:Overlay) { 
      this.urlCancionActual = null;
  }

  canciones : Canciones[];
  urlCancionActual:string;

  getCanciones(): void{
    this.cancionesService.getCanciones().subscribe(vinilos => {this.canciones = vinilos; console.log(this.canciones)})
  }

  ngOnInit() {
    this.getCanciones();
    
  }
  reproducir(dato){
      console.log(dato);
      this.overlay.cancnionActual=dato;
      this.overlay.Toggle();
  }
  ngOnDestroy(){
      this.overlay.IsVisible=false;
  }

}