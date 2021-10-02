import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  customers: any = []
  accounts: any = []
  selectedCustomer: number = 0
  selectedValue: number = 0

  constructor(private us: UsersService) { }

  ngOnInit(): void {
    this.us.listCustomers()
      .subscribe(response => {
        this.customers = response
      })
  }

  viewAccounts(form: NgForm){
    const custID = Number(form.value.customer)
    if(custID == 0){
      alert('Select a customer')
      return
    }
    this.us.getAccounts(custID)
      .subscribe(response => {
        this.accounts = response
        if(response.length == 0) alert('No accounts found')
      })
  }

  addAccount(form: NgForm){
    if(this.selectedCustomer == 0){
      alert('Select a customer')
      return
    }
    this.us.addAccount(Number(form.value.customer), form.value.accountType, Number(form.value.accountOutstanding))
      .subscribe(response => {
        alert('Account added')
      })
  }
}
