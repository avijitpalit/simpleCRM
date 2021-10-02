import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  numbers: any = [1, 2, 3];
  customers: any = [];

  constructor(private us: UsersService) { }

  ngOnInit(): void {
    this.us.listCustomers()
      .subscribe(response => {
        this.customers = response;
      });
  }

  addCustomer(form: NgForm){
    this.us.addCustomer(form.value.name)
      .subscribe(response => {
        this.customers.push({
          Customer_ID: response.Customer_ID,
          Customer_Name: response.Customer_Name
        })
        alert('Customer added')
      })
  }

  editCustomer(){
    this.us.updateCustomer(4, 'Ok put working')
      .subscribe(response => {
        console.log(response)
      })
  }

}
