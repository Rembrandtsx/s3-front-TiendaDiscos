import { Component, OnInit, Input } from '@angular/core';
import { Transaccion } from '../../transaccion/transaccion';
import { TransaccionService} from '../../transaccion/transaccion.service';
import { Observable } from 'rxjs';
import { TransaccionDetail } from '../../transaccion/transaccion-detail';
import { Router } from '@angular/router';

@Component({
  selector: 'transaccionesGeneradas-list',
  templateUrl: './transaccion-list.component.html',
  styleUrls:['./transaccion-list.component.css']
})
export class TransaccionGeneradasListComponent implements OnInit {

  constructor(private transaccionService: TransaccionService, private router: Router ) { }

  @Input() transacciones: TransaccionDetail[];
  @Input() valorTotal: number;

  getTransacciones(){
    console.log(this.transaccionService);
    this.transaccionService.getUsuario().subscribe((usu) =>{ this.transacciones= usu.transaccionesGeneradas;console.log(usu)});
  }
  verDetail(t:TransaccionDetail){
    this.router.navigate(['/transacciones/'+t.id]);
  }
  ngOnInit() {
    
    
    console.log(this.transacciones);
  
  }
}
