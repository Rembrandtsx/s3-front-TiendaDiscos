import { Component, OnInit, OnChanges, EventEmitter, Input, Output } from '@angular/core';
import { TransaccionService } from '../transaccion.service';
import { TransaccionDetail } from '../transaccion-detail';

@Component({
  selector: 'app-edit-envio',
  templateUrl: './edit-envio.component.html',
  styleUrls: ['./edit-envio.component.css']
})
export class EditEnvioComponent implements OnInit, OnChanges {

  constructor(private transaccionService: TransaccionService) { }

  @Input() transaccionDetail: TransaccionDetail;
  @Output() cancel= new EventEmitter();
  @Output() update= new EventEmitter();
  transaccionTemp: TransaccionDetail;
  estado:string;

  actualizar1()
  {
    this.update.emit();
  }
  salir(){
    this.cancel.emit();

  }
  cambiarEstado(a:string){
    this.transaccionDetail.estado=a;
    console.log(this.transaccionDetail)
  }
  
  ngOnInit() {
    
  }
  ngOnChanges() {
  }
}
