import { Component, OnInit,ViewContainerRef,Optional } from '@angular/core';
import { Vinilo } from '../vinilo';
import { ViniloService } from '../vinilo.service';
import { ActivatedRoute, Router } from '@angular/router';
import {CarritoComprasService} from '../../carrito-compras/carrito-compras.service';

import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-vinilo-detail',
  templateUrl: './vinilo-detail.component.html',
  styleUrls: [ './vinilo-detail.component.css'],

})
export class ViniloDetailComponent implements OnInit {

  constructor(private viniloService : ViniloService,
    private carritoService : CarritoComprasService,  
              private routes: ActivatedRoute, 
              private router : Router,

              private toastrService: ToastrService
  ) { }

  vinilo : Vinilo;
  tipo : string;
  id:number;
  e:boolean;
  agregado:boolean;

  showComentarios: boolean;

  showHideComentarios(): void {
    this.showComentarios = !this.showComentarios;

}
  

  
  getVinilos(id:number): void{
    this.viniloService.getVinilos().subscribe(vinilos => 
        {
            
            
            this.vinilo = vinilos.filter(obj=>{ return obj.id == id})[0];
           
        
        })
  }
  agregarCarrito(){
    this.carritoService.getCarritoComprasDetail().subscribe(
      (u)=>{this.e=false; u.vinilos.forEach(element => {
        if(element.id==this.vinilo.id){
          this.e=true;
        }
      });
    if(this.e==false){
      this.carritoService.agregarViniloDeCarritoCompras(this.vinilo).subscribe();
    }
    this.agregado=true;

    
    
    }
    
    );
    

  }



  ngOnInit() {
    this.agregado=false;
    let viniloId = +this.routes.snapshot.paramMap.get('id'); 
    this.getVinilos(viniloId);
    this.tipo = 'vinilos';
    this.id =  +this.routes.snapshot.paramMap.get('id');
    this.showComentarios = false;
  }

}