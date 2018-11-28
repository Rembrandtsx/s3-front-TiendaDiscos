import { Component, OnInit, EventEmitter , ViewContainerRef} from '@angular/core';
import { TransaccionService} from '../transaccion.service'
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router'
import { TransaccionDetail } from '../transaccion-detail';
import { Vinilo } from '../../vinilo/vinilo';
import { LoginService } from '../../UsuariosModule/services/login.service';
@Component({
  selector: 'detail-transaccion',
  templateUrl: './transaccion-detail.component.html',
  styleUrls: ['./transaccion-detail.component.css']
})
export class TransaccionDetailComponent implements OnInit {

  constructor (private transaccionService: TransaccionService,  private router: Router,private route: ActivatedRoute,  private auth: LoginService){ }

  transaccionid: number;
  transaccionDetail: TransaccionDetail;
  transaccionT: TransaccionDetail;
  editTransaccion:boolean=false;
  editEnvio:boolean=false;
  getTransaccionDetail():void{
  
  this.transaccionService.getTransaccionDetail(this.transaccionid).subscribe(transaccionDetail=>{this.transaccionDetail=transaccionDetail}).closed;

  }
  editarTransaccion(){
    this.editTransaccion=true;
  }
  editarEnvio(){
    this.editEnvio=true;
  }
  ocultarEditT(){
    this.editTransaccion=false;
  }
  actualizar()
  {
    
    this.transaccionService.actualizarTransaccionDetail(this.transaccionDetail.id, this.transaccionDetail).subscribe(()=>this.ocultarEditT());
    ;
      }
      verL(){
        this.router.navigate(['/login']);
      }
  ngOnInit() {
    if(this.auth.currentUser!=undefined){
    this.transaccionid= +this.route.snapshot.paramMap.get('id');
    this.transaccionDetail= new TransaccionDetail();
    this.getTransaccionDetail();
    }else{
      this.verL();
    }
  }
  

}
