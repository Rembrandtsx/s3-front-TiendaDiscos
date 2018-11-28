import { Component, OnInit, OnDestroy ,Input} from '@angular/core';
import { Canciones } from '../canciones';
import { CancionesService } from '../canciones.service';
import { Overlay} from '../overlay';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'listar-canciones',
  templateUrl: './canciones-listar.component.html',
  styleUrls: [ './canciones-listar.component.css']
})
export class CancionesListarComponent implements OnInit,OnDestroy {

  constructor(private cancionesService : CancionesService,private overlay:Overlay,private routes: ActivatedRoute) { 
      this.urlCancionActual = null;
  }

  @Input() canciones : Canciones[];
  urlCancionActual:string;
  tipo : string;
  id:number[];


  getCanciones(): void{
    this.cancionesService.getCanciones(+this.routes.snapshot.paramMap.get('id') + '/canciones').subscribe((vinilos: Canciones[]) =>{
       this.canciones = vinilos;
       this.id = vinilos.map(x => x.id);
       } );
  }

  ngOnInit() {
    this.getCanciones();
    this.tipo = 'canciones';

  }
  reproducir(dato){
      this.overlay.cancnionActual=dato;
      this.overlay.Toggle();
  }
  ngOnDestroy(){
      this.overlay.IsVisible=false;

  }

}