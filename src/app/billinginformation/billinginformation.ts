import { DecimalPipe } from "@angular/common";

/**
 * Esta clase representa un BillingInformation de VinilApp
 */
export class BillingInformation{

    /**
     * Id de un BillingInformation
     */
    id: number;

    /**
     * numero de cuenta de un BillingInformation
     */
    cuentaDeAhorros: number;

    /**
     *  cantidad gastada de un billing
     */
    spent: number;

        /**
     *  cantidad recivida en un billing
     */
    received: number;


}