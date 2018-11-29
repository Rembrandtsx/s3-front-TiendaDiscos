import { Component,OnInit } from "@angular/core";
import { Usuario } from "../../UsuariosModule/interfaces/usuario";

import { RegisterService } from "../../UsuariosModule/services/register.service";
import { ToastrService } from "ngx-toastr";
import { CarritoCompras } from "../../carrito-compras/carrito-compras";
import { WishList } from "../../wishList/wishList";
import { BillingInformation } from "../../billinginformation/billinginformation";
import { BillingInformationService } from "../../billinginformation/billinginformation.service";
import { CarritoComprasService } from "../../carrito-compras/carrito-compras.service";
import { WishListService } from "../../wishList/wishList.service";
import { LoginService } from "../../UsuariosModule/services/login.service";

@Component({
    selector:"app-register-user",
    templateUrl:"./register.component.html",
    styleUrls:["./register.component.css"]
})
export class RegisterComponent implements OnInit{

    usuario:Usuario;
    billing:BillingInformation;
    constructor(private registerService:RegisterService,
         private toastrService:ToastrService,
         private billingService: BillingInformationService,
         private carritoComprasService:CarritoComprasService,
         private wishListService:WishListService,
         private loginService:LoginService
         
         ){
        
    }
    ngOnInit(){
        this.usuario = new Usuario();
        this.billing = new BillingInformation();
            
    }
    anadirImagen(evento:any){
        this.usuario.imagen= evento;
    }
    register(){
    
        
        this.usuario.rol="USUARIO"
        if(this.billing.cuentaAhorro.toString.length <= 9 ){
            this.registerService.crearUsuario(this.usuario).subscribe(usuario=>{
                this.usuario= usuario;
                
                this.billingService.postBillingInformation(this.billing,this.usuario.id).subscribe();
                let objeto= {totalCost:0}
                this.wishListService.postWish(objeto as WishList, this.usuario.id).subscribe();
                this.carritoComprasService.postCarritoCompras(objeto as CarritoCompras,this.usuario.id).subscribe();
                
                this.toastrService.success("El usuario fue creado", "Usuario creado")
                this.loginService.login(this.usuario.email, this.usuario.contrasenha);
            })
        }else{
            this.toastrService.error("Debe tener máximo 10 digitos", "Cuenta de Ahorro invalida")
        }
        
    }
       
}