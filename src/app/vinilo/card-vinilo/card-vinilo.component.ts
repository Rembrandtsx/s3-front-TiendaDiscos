import { Component, OnInit,Input } from '@angular/core';
import { Vinilo } from '../vinilo';


@Component({
  selector: "card-vinilo",
  templateUrl: './card-vinilo.component.html',
 // styleUrls: [ './vinilo-listar.component.css']
})
export class CardViniloComponent implements OnInit {

  constructor() { }

  @Input() vinilo: Vinilo[];


   ngOnInit() {
  
    
  }

}