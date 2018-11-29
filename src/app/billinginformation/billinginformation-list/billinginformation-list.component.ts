import { Component, OnInit } from '@angular/core';
import { BillingInformationService } from '../billinginformation.service';
import { BillingInformation } from '../billinginformation';

@Component({
  selector: 'app-billinginformation-list',
  templateUrl: './billinginformation-list.component.html',
  styleUrls: ['./billinginformation-list.component.css']
})
export class BillinginformationListComponent implements OnInit {

  /**
   * Constructor para el componente
   * @param billingInformationService El proveedor de servicios de billing 
   */
  constructor(private billingInformationService: BillingInformationService) { }

  /**
   * Lista de los billing 
   */
  billingInformation: BillingInformation;

  showCreate : boolean;

  showHideCreate() : void{
    this.showCreate = !this.showCreate;
  }

  /**
   * Pregunta al servicio para actualizar la lista de billingInformation
   */
  getBillingInformation(): void {
    this.billingInformationService.getBillingsInformation().subscribe(billingInformation => {
      this.billingInformation = billingInformation ;
      console.log(billingInformation);
    });
  }
  ngOnInit() {

    this.billingInformation = new BillingInformation();
    this.getBillingInformation();
    this.showCreate = false;
  }

}
