import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from "../../../services/users.service";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerID: number = 0;
  customerName: string = "";

  constructor(private route: ActivatedRoute, public us: UsersService) {
    this.customerID = Number(this.route.snapshot.params.id)
  }

  ngOnInit(): void {
    this.us.getCustomer(this.customerID)
      .subscribe(response => {
        this.customerName = response.Customer_Name
      })
  }

  updateCustomer(form: NgForm){
    this.us.updateCustomer(this.customerID, form.value.name)
      .subscribe(response => {
        if(response) alert('Customer name updated');
        else alert('Error occured while updating customer name');
      })
  }

}
