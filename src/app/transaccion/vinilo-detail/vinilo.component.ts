import { Component, OnInit, Input } from '@angular/core';
import { Vinilo } from '../../vinilo/vinilo';
import { ViniloService } from '../../vinilo/vinilo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viniloTransaccion',
  templateUrl: './vinilo.component.html',
  styleUrls: [ './vinilo.component.css']
})
export class ViniloComponent implements OnInit {

  constructor(private viniloService : ViniloService, private routes: ActivatedRoute) { }

  @Input() vinilo : Vinilo;

  

  ngOnInit() {
   
  }

}