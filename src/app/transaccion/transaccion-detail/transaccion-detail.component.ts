import { Component, OnInit } from '@angular/core';
import { TransaccionService} from '../transaccion.service'
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router'
import { TransaccionDetail } from '../transaccion-detail';
import { Vinilo } from '../../vinilo/vinilo';
@Component({
  selector: 'detail-transaccion',
  templateUrl: './transaccion-detail.component.html',
  styleUrls: ['./transaccion-detail.component.css']
})
export class TransaccionDetailComponent implements OnInit {

  constructor (private transaccionService: TransaccionService, private route: ActivatedRoute){ }

  transaccionid: number;
  transaccionDetail: TransaccionDetail;

  getTransaccionDetail():void{
  this.transaccionService.getTransaccionDetail(this.transaccionid).subscribe(transaccionDetail=>{this.transaccionDetail=transaccionDetail});

  }
  ngOnInit() {
    this.transaccionid= +this.route.snapshot.paramMap.get('id');
    this.transaccionDetail= new TransaccionDetail();
    this.getTransaccionDetail();

  }
  

}
