import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../models/customer.model';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { CustomerType } from '../models/customer-type.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  engineers: string[] = [];
  customers: CustomerModel[] = [];
  customerTypes = CustomerType;

  newCustomer: CustomerModel = {
    customerId: null,
    name: null,
    type: null
  };

  constructor(
    private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.GetCustomers().subscribe(customers => this.customers = customers);
  }

  createCustomer(form: NgForm): void {
    if (form.invalid) {
      alert('form is not valid');
    } else {
      this.customerService.CreateCustomer(this.newCustomer).then(() => {
        //it's worth to think about push element to array instead of fetching all list
        this.customerService.GetCustomers().subscribe(customers => this.customers = customers);
      });
    }
  }
}
