import { Component, OnInit } from '@angular/core';
import { BillingInformationService } from '../billinginformation.service';
import { BillingInformation } from '../billinginformation';
import { ActivatedRoute } from '@angular/router';

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
  constructor(        private route: ActivatedRoute,
    private billingInformationService: BillingInformationService) { }

  /**
   * Lista de los billing 
   */
  billingInformation: BillingInformation;

  billing_id:number;


  /**
   * Pregunta al servicio para actualizar la lista de billingInformation
   */
  getBillingInformation(): void {
    this.billingInformationService.getBillingInformationDetail(this.billing_id).subscribe(billingInformation => this.billingInformation = billingInformation );
  }
  ngOnInit() {

    this.billing_id = +this.route.snapshot.paramMap.get('id');

    this.billingInformation = new BillingInformation();
    this.getBillingInformation();
  }

}
