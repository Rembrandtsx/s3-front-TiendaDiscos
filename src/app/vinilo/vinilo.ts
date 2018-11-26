import { Canciones } from '../canciones/canciones';
/**
 * Esta clase representa un vinilo de VinilApp
 */
export class Vinilo {

    /**
     * Nombre del Vinilo.
     */
    nombre: String;

    /**
     * Artista del Vinilo.
     */
    artista: String;

    /**
     * Fecha de lanzamiento del Vinilo.
     */
    fechaLanzamiento: Date;

    /**
     * Precio del Vinilo.
     */
    precio: number;

    /**
     * Productora del Vinilo.
     */
    productora: String;

    /**
     * URL de una vista prieva mp3 del Vinilo.
     */
    previewURI: String;

    /**
     * El id del vinilo
     */
    id: number;

    informacionAdicional:String;

    canciones:Canciones[];
}
