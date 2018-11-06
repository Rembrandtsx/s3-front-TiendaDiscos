import { Component, OnInit, Input } from '@angular/core';
import { vinilo } from '../vinilo';
import { ViniloService } from '../vinilo.service';

@Component({
  selector: 'list-vinilos',
  templateUrl: './vinilo-list.component.html',
  styleUrls: [ './vinilo-list.component.css']
})
export class ViniloListComponent implements OnInit {

  constructor(private viniloService: ViniloService) { }

  @Input() vinilos: vinilo[];

  getVinilos(): void {
    this.viniloService.getVinilos().subscribe(vinilos => this.vinilos = vinilos)
  }

  ngOnInit() {
    this.getVinilos();
  }

}
