import { Component, OnInit,Input } from '@angular/core';
import { Vinilo } from '../../vinilo/vinilo';
import { ViniloService } from '../../vinilo/vinilo.service';

@Component({
  selector: 'list-vinilosCarritoCompras',
  templateUrl: './vinilo-list.component.html',
  styleUrls: [ './vinilo-list.component.css']
})
export class ViniloListComponent implements OnInit {

  constructor(private viniloService: ViniloService) { }

  @Input() vinilos: Vinilo[];
 
  getVinilos(): void {

    this.viniloService.getVinilosUsuario(1).subscribe(vinilos => this.vinilos = vinilos)

  }

  ngOnInit() {
    this.getVinilos();
  }

}
