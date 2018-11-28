import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { TransaccionDetail } from '../transaccion-detail';
import { TransaccionService } from '../transaccion.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-edit-transaccion',
  templateUrl: './edit-transaccion.component.html',
  styleUrls: ['./edit-transaccion.component.css']
})
export class EditTransaccionComponent implements OnInit, OnChanges {

  constructor(private transaccionService: TransaccionService) { }

  @Input() transaccionDetail: TransaccionDetail;
  @Output() cancel= new EventEmitter();
  transaccionTemp: TransaccionDetail;
  estado:string;

  actualizar()
  {
    
    console.log(this.transaccionDetail);
    this.transaccionService.getTransaccionDetail(this.transaccionDetail.id).subscribe((u)=>{this.transaccionTemp=u; this.transaccionTemp.estado=this.transaccionDetail.estado;  ; this.transaccionService.actualizarTransaccionDetail(this.transaccionTemp.id, this.transaccionTemp).subscribe((u)=>this.salir());
      });
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
