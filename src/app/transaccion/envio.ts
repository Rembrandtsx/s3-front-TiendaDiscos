/**
 * Esta clase representa un envio de una transaccion de VinilApp
 */
export class Envio{

    /**
     * Id de una transaccion
     */
    
    id: number;

    /**
     * Dirección de inicio
     */

    direccionSalida: string;
    /**
     * Direccion de destino
     */
    direccionEntrega: string;

    /**
     * Estado del envio
     */
    estado: string;
}