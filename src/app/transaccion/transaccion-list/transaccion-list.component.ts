import { Component, OnInit, Input } from '@angular/core';
import { Transaccion } from '../transaccion';
import { TransaccionService} from '../transaccion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'transacciones-list',
  templateUrl: './transaccion-list.component.html',
  styleUrls:['./transaccion-list.component.css']
})
export class TransaccionListComponent implements OnInit {

  constructor(private transaccionService: TransaccionService ) { }

  @Input() transacciones: Transaccion[];
  compras:boolean=true;

  getTransacciones(){
    console.log(this.transaccionService);
    if(this.compras==true){
    this.transaccionService.getUsuario().subscribe((usu) =>{ this.transacciones= usu.transaccionesGeneradas;console.log(usu)});
    }else{
      this.transaccionService.getUsuario().subscribe((usu) =>{ this.transacciones= usu.transaccionesRecibidas;console.log(usu)});
    
    }
  }
  mostrarCompras(){
    this.compras=true;
    this.ngOnInit();
   
  }
  mostrarVentas(){
    this.compras=false;
    this.ngOnInit();
  }
  ngOnInit() {
    console.log(this.transaccionService);
    this.getTransacciones();
  }
}
