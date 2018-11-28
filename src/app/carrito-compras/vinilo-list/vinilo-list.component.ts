import { Component, OnInit,Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Vinilo } from '../../vinilo/vinilo';
import { ViniloService } from '../../vinilo/vinilo.service';
import { CarritoComprasService } from '../carrito-compras.service';
import { Router } from '@angular/router';

@Component({
  selector: 'list-vinilosCarritoCompras',
  templateUrl: './vinilo-list.component.html',
  styleUrls: [ './vinilo-list.component.css']
})
export class ViniloListComponent implements OnInit, OnChanges {

  constructor(private carritoComprasService: CarritoComprasService, private router: Router) { }

  @Input() vinilos: Vinilo[];
  @Output() update = new EventEmitter();

eliminarDelCarrito(vinilo: Vinilo){
  
this.carritoComprasService.eliminarViniloDeCarritoCompras(vinilo.id).subscribe(()=>{this.ngOnChanges();});
this.update.emit();

this.ngOnInit();
}
  ngOnInit() {
    this.carritoComprasService.getCarritoComprasDetail().subscribe((u)=>{ this.vinilos=u.vinilos; });

  }
  verVinilo(id:number){
    this.router.navigate(["/viniloss/"+id]);
  }
  ngOnChanges() {
   this.ngOnInit();
  }

}
