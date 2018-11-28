import { Component, OnInit,ViewContainerRef,Optional } from '@angular/core';
import { Vinilo } from '../vinilo';
import { ViniloService } from '../vinilo.service';

import { ActivatedRoute, Router } from '@angular/router';


import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-vinilo',
  templateUrl: './vinilo.component.html',
  styleUrls: [ './vinilo.component.css'],

})
export class ViniloComponent implements OnInit {


  constructor(private viniloService : ViniloService, 
              private routes: ActivatedRoute, 
              private router : Router,

              private toastrService: ToastrService
  ) { }


  vinilo : Vinilo;
  tipo : string;
  id:number;
  /**
  * The suscription which helps to know when a new book
  * needs to be loaded
  */
  navigationSubscription:any;

  showCreate: boolean;
  
  showCreates: boolean;

  
  showEdit: boolean;

  showHideCreate(): void {
    this.showCreate = !this.showCreate;
    this.showEdit = false;
    this.showCreates = false;
}
 


showHideEdit(): void {
  this.showEdit = !this.showEdit;
  this.showCreate = false;
  this.showCreates = false;
}


  
showHideCreates(): void {
  this.showCreates = !this.showCreates;
  this.showCreate = false;
  this.showEdit = false;
}
  
  getVinilos(id:number): void{
    this.viniloService.getVinilos(1).subscribe(vinilos => 
        {
            
            
            this.vinilo = vinilos.filter(obj=>{ return obj.id == id})[0];
           
        
        })
  }

      /**
* This function deletes the book from the BookStore 
*/
deleteVinilo(): void {
  
  this.viniloService.deleteVinilo(this.id).subscribe(obj=>this.router.navigate(["vinilos"]));
}

  ngOnInit() {
    let viniloId = +this.routes.snapshot.paramMap.get('id'); 
    this.getVinilos(viniloId);
    this.tipo = 'vinilos';
    this.id =  +this.routes.snapshot.paramMap.get('id');
    this.showCreate = false;
    this.showCreates = false;
    this.showEdit = false;
  }

}