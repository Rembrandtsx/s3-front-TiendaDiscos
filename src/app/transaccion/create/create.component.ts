import { Component, OnInit } from '@angular/core';
import { TransaccionService} from '../transaccion.service';
import { Transaccion } from '../transaccion';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  transaccion: Transaccion;
  constructor(private service :TransaccionService) { }


  createTransaccion():Transaccion{
    this.service.createTransaccion(this.transaccion).subscribe((transaccion)=>{this.transaccion=transaccion;});
    return this.transaccion;
  }
  cancelCreation(): void {
    
}
  ngOnInit() {
  }

}
