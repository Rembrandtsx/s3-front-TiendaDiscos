import { Component, OnInit,Input } from '@angular/core';
import { Vinilo } from '../vinilo';
import { ViniloService } from '../vinilo.service';
import {LoginService } from '../../UsuariosModule/services/login.service'
@Component({
  selector: "list-vinilos",
  templateUrl: './vinilo-list.component.html',
  styleUrls: [ './vinilo-list.component.css']
})
export class ViniloListComponent implements OnInit {

  constructor(private viniloService: ViniloService,private service:LoginService) { }

  @Input() vinilos: Vinilo[];
  
  showCreate: boolean;

  showEdit: boolean;

  showHideCreate(): void {
    this.showCreate = !this.showCreate;
    this.showEdit = false;
}
 


showHideEdit(): void {
  this.showEdit = !this.showEdit;
  this.showCreate = false;
}

  getVinilos(): void {
    this.viniloService.getVinilosUsuario(this.service.getUserObject().id).subscribe(vinilos => this.vinilos = vinilos);
 
  }

  ngOnInit() {
  
    this.getVinilos();
    this.showCreate = false;
    this.showEdit = false;

  }

}
