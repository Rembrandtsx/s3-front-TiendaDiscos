import { Component, OnInit, Input } from '@angular/core';
import { TarjetaDeCredito } from '../tarjetadecredito';
import { LoginService } from '../../UsuariosModule/services/login.service';
import { BillingInformationService } from '../billinginformation.service';
@Component({
  selector: 'app-tarjetacredito-list',
  templateUrl: './tarjetacredito-list.component.html',
  styleUrls: ['./tarjetacredito-list.component.css']
})
export class TarjetacreditoListComponent implements OnInit {
  
  @Input()billingtarjetas : TarjetaDeCredito [];

  constructor(private auth:LoginService,private service : BillingInformationService) { }


  showEdit : boolean;

  idActual : number;

  showHideEdit(id:number) : void{
    this.showEdit = !this.showEdit;
    this.idActual = id;
    console.log(this.idActual)
  }

  getTarjtas(): void {
    this.service.getTarjeta().subscribe(billingtarjetas => this.billingtarjetas = billingtarjetas);
 
  }

  ngOnInit() {
  
    this.getTarjtas();
    this.showEdit = false;
    this.idActual = 0;
  }
}
