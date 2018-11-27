import { Vinilo } from "../vinilo/vinilo";
import { Usuario } from "../UsuariosModule/interfaces/usuario";

/**
 * Esta clase representa una transaccion de VinilApp
 */
export class Transaccion{

    /**
     * Id de una transaccion
     */
    
    id?: number;
    estado?: string;
    formaDePago?: string;
    vinilo: Vinilo;
    usuarioComprador?: Usuario;
    usuarioVendedor?: Usuario;
}