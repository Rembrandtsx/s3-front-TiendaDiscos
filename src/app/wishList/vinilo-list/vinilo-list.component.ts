import { Component, OnInit,Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Vinilo } from '../../vinilo/vinilo';
import { ViniloService } from '../../vinilo/vinilo.service';
import { Router } from '@angular/router';
import { WishListService } from '../wishList.service';

@Component({
  selector: 'list-vinilosWishListDetail',
  templateUrl: './vinilo-list.component.html',
  styleUrls: [ './vinilo-list.component.css']
})
export class ViniloListComponent implements OnInit, OnChanges {

  constructor(private wishListDetailService: WishListService, private router: Router) { }

  @Input() vinilos: Vinilo[];
  @Output() update = new EventEmitter();

eliminarDelWishListDetail(vinilo: Vinilo){
  
this.wishListDetailService.eliminarViniloDeWishListDetail(vinilo.id).subscribe(()=>{this.ngOnChanges();});
this.update.emit();

this.ngOnInit();
}
  ngOnInit() {
    this.wishListDetailService.getWishListDetail().subscribe((u)=>{ this.vinilos=u.vinilos; });

  }
  verVinilo(id:number){
    this.router.navigate(["/viniloss/"+id]);
  }
  ngOnChanges() {
   this.ngOnInit();
  }

}
