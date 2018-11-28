import { Comentario } from "../../comentario/comentario";
import { TransaccionDetail } from "../../transaccion/transaccion-detail";
import { Vinilo } from "../../vinilo/vinilo";
import { BillingInformation } from "../../billinginformation/billinginformation";
import { CarritoCompras } from "../../carrito-compras/carrito-compras";
import { WishList } from "../../wishList/wishList";

export class Usuario{
    email:string;
    username?:string;
    contrasenha:string;
    billingInformation?: BillingInformation;
    nombre?:string;
    direccion?:string;
    rol?:string;
    calificacion?:number;
    type?:string;
    imagen?:string;
    id?:number;
    comentarios?:Comentario[];
    transaccionesGeneradas?:TransaccionDetail[];
    transaccionesRecibidas?:TransaccionDetail[];
    vinilos?:Vinilo[];
    carritoCompras?:CarritoCompras;
    wishList?:WishList;

}