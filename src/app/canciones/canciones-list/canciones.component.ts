import { Component, OnInit, OnDestroy ,Input} from '@angular/core';
import { Canciones } from '../canciones';
import { CancionesService } from '../canciones.service';
import { Overlay} from '../overlay';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'list-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: [ './canciones.component.css']
})
export class CancionesComponent implements OnInit,OnDestroy {

  constructor(private cancionesService : CancionesService,private overlay:Overlay,private routes: ActivatedRoute) { 
      this.urlCancionActual = null;
  }

  @Input() canciones : Canciones[];
  urlCancionActual:string;
  tipo : string;
  id:number[];

  showCreate: boolean;
  
  showHideCreate(): void {
    this.showCreate = !this.showCreate;
}
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