import { Usuario } from '../UsuariosModule/interfaces/usuario'

export class Comentario{
    /**
     * Id del comentario
     */
    id : number;
    /**
     * Contenido del comentario
     */
    contenido: string;
    /**
     * Id de la transaccion
     */
    transaccion: number;
    /**
     * Id del vinilo
     */
    vinilo: number;
    /**
     * Id de la cancion
     */
    cancion: number;
    /**
     * Id de la cancion
     */
    usuario: Usuario;
}