import { DecimalPipe } from "@angular/common";
import { TarjetaDeCredito } from "./tarjetadecredito";

/**
 * Esta clase representa un BillingInformation de VinilApp
 */
export class BillingInformation{

    /**
     * Id de un BillingInformation
     */
    id?: number;

    /**
     * numero de cuenta de un BillingInformation
     */
    cuentaAhorro?: string;

    /**
     *  cantidad gastada de un billing
     */
    spent?: number;

        /**
     *  cantidad recivida en un billing
     */
    received?: number;

    tarjetasDeCredito?:TarjetaDeCredito[];


}