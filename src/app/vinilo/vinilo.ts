import { Canciones } from '../canciones/canciones';
import { Usuario } from '../UsuariosModule/interfaces/usuario';
/**
 * Esta clase representa un vinilo de VinilApp
 */
export class Vinilo {

    /**
     * Nombre del Vinilo.
     */
    nombre?: String;

    /**
     * Artista del Vinilo.
     */
    artista?: String;

    categoria?:String;
    /**
     * Fecha de lanzamiento del Vinilo.
     */
    fechaLanzamiento?: any;

    /**
     * Precio del Vinilo.
     */
    precio?: number;

    /**
     * Productora del Vinilo.
     */
    productora: String;

    /**
     * URL de una vista prieva mp3 del Vinilo.
     */
    previewURI?: String;

    /**
     * El id del vinilo
     */
    id: number;

    /**
     * Información adicional sobre el vinilo
     */
    informacionAdicional:String;

    /**
     * usuario que creo el vinilo
     */
    usuario: Usuario;

    /**
     * Arreglo con las canciones del vinilo
     */
    canciones:Canciones[];

 
}
