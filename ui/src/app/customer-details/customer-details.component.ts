import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../models/customer.model';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { CustomerType } from '../models/customer-type.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customer: CustomerModel;
  customerTypes = CustomerType;
  private customerId: number;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService) {
    this.customerId = route.snapshot.params.id;
  }

  ngOnInit() {
    this.customerService.GetCustomer(this.customerId).subscribe(customer => this.customer = customer);
  }
}
