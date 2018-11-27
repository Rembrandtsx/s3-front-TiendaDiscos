import { Component, OnInit,ViewContainerRef,Optional } from '@angular/core';
import { Vinilo } from '../vinilo';
import { ViniloService } from '../vinilo.service';
import { ActivatedRoute, Router } from '@angular/router';

import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-vinilo-detail',
  templateUrl: './vinilo-detail.component.html',
  styleUrls: [ './vinilo-detail.component.css'],

})
export class ViniloDetailComponent implements OnInit {

  constructor(private viniloService : ViniloService, 
              private routes: ActivatedRoute, 
              private router : Router,

              private toastrService: ToastrService
  ) { }

  vinilo : Vinilo;
  tipo : string;
  id:number;


  

  
  getVinilos(id:number): void{
    this.viniloService.getVinilo().subscribe(vinilos => 
        {
            
            
            this.vinilo = vinilos.filter(obj=>{ return obj.id == id})[0];
           
        
        })
  }



  ngOnInit() {
    let viniloId = +this.routes.snapshot.paramMap.get('id'); 
    this.getVinilos(viniloId);
    this.tipo = 'vinilos';
    this.id =  +this.routes.snapshot.paramMap.get('id');
  }

}