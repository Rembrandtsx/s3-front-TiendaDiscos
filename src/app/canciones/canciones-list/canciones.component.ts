import { Component, OnInit, OnDestroy } from '@angular/core';
import { Canciones } from '../canciones';
import { CancionesService } from '../canciones.service';
import { OverlayMusic } from '../overlay';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'list-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: [ './canciones.component.css']
})
export class CancionesComponent implements OnInit,OnDestroy {

  constructor(private cancionesService : CancionesService,private overlay:OverlayMusic,private routes: ActivatedRoute) { 
      this.urlCancionActual = null;
  }

  canciones : Canciones[];
  urlCancionActual:string;
  tipo : string;
  id:number[];

  showCreate: boolean;
  
  showHideCreate(): void {
    this.showCreate = !this.showCreate;
}
  getCanciones(): void{
    this.cancionesService.getCanciones().subscribe((vinilos: Canciones[]) =>{
       this.canciones = vinilos;
       this.id = vinilos.map(x => x.id);
       } );
  }

  ngOnInit() {
    this.getCanciones();
    this.tipo = 'canciones';

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