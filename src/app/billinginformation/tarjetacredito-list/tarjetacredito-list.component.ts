import { Component, OnInit, Input } from '@angular/core';
import { TarjetaDeCredito } from '../tarjetadecredito';
import { LoginService } from '../../UsuariosModule/services/login.service';

@Component({
  selector: 'app-tarjetacredito-list',
  templateUrl: './tarjetacredito-list.component.html',
  styleUrls: ['./tarjetacredito-list.component.css']
})
export class TarjetacreditoListComponent implements OnInit {
  @Input() billingtarjetas : TarjetaDeCredito [];

  constructor(private auth:LoginService) { }



  ngOnInit() {
    
    }
}
