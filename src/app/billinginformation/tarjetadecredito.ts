export class TarjetaDeCredito {


    /**
     * Id de la tarjeta
     */
    id?:number;

    
    /**
     * Numero de la tarjeta
     */
    numero?:number;

        /**
     * Numero de verificacion de la tarjeta
     */
    numeroVerificacion?: number;

    /**
     * fecha de vencimiento de la tarjeta
     */
    fechaVencimiento?:any;

    /**
     * nombre del dueño de la tarjeta
     */
    name?:String;

    /**
     * cvc de la tarjeta
     */
    cvc?:String;
    /**
     * Imagen asociada al medio de pago.
     */
    imagen: string;



}