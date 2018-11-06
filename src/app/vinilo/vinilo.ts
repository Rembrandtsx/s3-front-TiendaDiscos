/**
 * Esta clase representa un vinilo de VinilApp
 */
export interface vinilo{

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
    precio : number;

    /**
     * Productora del Vinilo.
     */
    productora : String;

    /**
     * URL de una vista prieva mp3 del Vinilo.
     */
    previewURL : String;

    /**
     * url con la imagen del Vinilo.
     */
    url : String;
}