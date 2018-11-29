import { Component, OnInit, EventEmitter , ViewContainerRef} from '@angular/core';
import { TransaccionService} from '../transaccion.service'
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router'
import { TransaccionDetail } from '../transaccion-detail';
import { Vinilo } from '../../vinilo/vinilo';
import { LoginService } from '../../UsuariosModule/services/login.service';
import { Observable, Subscription } from 'rxjs';
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
  ob:Subscription;
  showComentarios:boolean;
  tipo : string;
  id:number



  getTransaccionDetail():void{
  
  this.ob= this.transaccionService.getTransaccionDetail(this.transaccionid).subscribe(transaccionDetail=>{this.transaccionDetail=transaccionDetail});
  }
  editarTransaccion(){
    this.editTransaccion=true;
  }
  editarEnvio(){
    this.editEnvio=true;
  }
  showHideComentarios():void{
    this.showComentarios = !this.showComentarios
  }
  ocultarEditT(){
    this.editTransaccion=false;
  }
  ocultarEditE(){
    this.editEnvio=false;
  }
  actualizar()
  {
    console.log(this.ob);
    this.ob.unsubscribe();

    this.transaccionService.actualizarTransaccionDetail(this.transaccionDetail.id, this.transaccionDetail).subscribe(()=>this.ocultarEditT());
    ;
      }
      verL(){
        this.router.navigate(['/login']);
      }
      actualizarE()
  {
    
    this.transaccionService.actualizarEnvio(this.transaccionDetail.id, this.transaccionDetail.envio).subscribe(()=>this.ocultarEditE());
    ;
      }
      
  ngOnInit() {
    if(this.auth.currentUser!=undefined){
    this.transaccionid= +this.route.snapshot.paramMap.get('id');
    this.transaccionDetail= new TransaccionDetail();
    this.getTransaccionDetail();
    this.tipo = 'transacciones';
    this.showComentarios =false;
    this.id = this.transaccionid
    }else{
      this.verL();
    }
  }
  

}
