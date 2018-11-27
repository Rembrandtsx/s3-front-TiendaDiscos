import { Comentario } from "../../comentario/comentario";
import { TransaccionDetail } from "../../transaccion/transaccion-detail";
import { Vinilo } from "../../vinilo/vinilo";
import { BillingInformation } from "../../billinginformation/billinginformation";

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

}