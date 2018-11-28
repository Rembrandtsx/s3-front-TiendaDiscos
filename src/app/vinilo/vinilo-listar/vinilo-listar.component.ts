import { Component, OnInit,Input } from '@angular/core';
import { Vinilo } from '../vinilo';
import { ViniloService } from '../vinilo.service';

@Component({
  selector: "listar-vinilos",
  templateUrl: './vinilo-listar.component.html',
 // styleUrls: [ './vinilo-listar.component.css']
})
export class ViniloListarComponent implements OnInit {

  constructor(private viniloService: ViniloService) { }

  @Input() vinilos: Vinilo[];


  getVinilos(): void {
    this.viniloService.getVinilos().subscribe(vinilos => this.vinilos = vinilos);
 
  }

  ngOnInit() {
  
    this.getVinilos();
  }

}