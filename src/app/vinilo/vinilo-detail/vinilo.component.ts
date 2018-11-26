import { Component, OnInit } from '@angular/core';
import { Vinilo } from '../vinilo';
import { ViniloService } from '../vinilo.service';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-vinilo',
  templateUrl: './vinilo.component.html',
  styleUrls: [ './vinilo.component.css']
})
export class ViniloComponent implements OnInit {

  constructor(private viniloService : ViniloService, private routes: ActivatedRoute,private router: Router,) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
          this.ngOnInit();
      }
  });
  }

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

  showHideCreate(): void {
    this.showCreate = !this.showCreate;
}

  
showHideCreates(): void {
  this.showCreates = !this.showCreates;
}
  
  getVinilos(id:number): void{
    this.viniloService.getVinilos().subscribe(vinilos => 
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