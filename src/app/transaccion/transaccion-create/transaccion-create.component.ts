import { Component, OnInit } from '@angular/core';
import { Transaccion } from '../transaccion';
import { TransaccionService} from '../transaccion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transaccion-create',
  templateUrl: './transaccion-create.component.html',
  styleUrls: ['./transaccion-create.component.css']
})
export class TransaccionCreateComponent implements OnInit {

  transaccion: Transaccion;

  constructor(private transaccionService: TransaccionService) { }


  createTransaccion(): Transaccion{
    this.transaccionService.createTransaccion(this.transaccion).subscribe(
      (transaccion)=>this.transaccion
    )
    return this.transaccion;
  }
  ngOnInit() {

  }

}
