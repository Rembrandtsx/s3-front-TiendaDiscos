import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BillingInformationService } from '../billinginformation.service';
import { ToastrService } from 'ngx-toastr';
import { BillingInformation } from '../billinginformation';

@Component({
    selector: 'app-billinginformation-create',
    templateUrl: './billinginformation-create.component.html',
    styleUrls: ['./billinginformation-create.component.css']
})
export class BillinginformationCreateComponent implements OnInit {

    constructor(
        private billingInformationService: BillingInformationService, ) { }
    private toastrService: ToastrService



    billing: BillingInformation;
    /**
  * The output which tells the parent component
  * that the user no longer wants to create an author
  */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new author
    */
    @Output() create = new EventEmitter();

    /**
     * el nuevo medio de pago
     */
    createBilling(): void {
        var billing_create= {
            cuentaDeAhorros:this.billing.cuentaDeAhorros
        };
        this.billingInformationService.createBilling(billing_create)
        .subscribe(()=> {
            this.create.emit();
            this.toastrService.success("The author was created", "Author creation");
        },err => {
            this.toastrService.error(err, "Error");
        });
    }


    cancelCreation(): void {
        this.cancel.emit();
    }

    ngOnInit() {
        this.billing = new BillingInformation();

    }



}
