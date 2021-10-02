import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from "../../../services/users.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  addAcc: any = {
    custID: 0,
    custName: '',
    accType: '',
    accOutstanding: 0
  }
  accID: number = Number(this.route.snapshot.params.id)

  constructor(public us: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.us.getAccount(this.accID)
      .subscribe(response => {
        this.addAcc.custID = response.Customer_ID
        this.addAcc.custName = response.Customer_Name
        this.addAcc.accType = response.Account_Type
        this.addAcc.accOutstanding = response.Account_Outstanding
      })
  }

  getAccount(){
    this.us.getAccount(this.accID)
      .subscribe(response => {
        console.log(response)
      })
  }

  updateAccount(){
    this.us.updateAccount(this.accID, {
        Customer_ID: this.addAcc.custID,
        Customer_Name: this.addAcc.custName,
        Account_ID: this.accID,
        Account_Type: this.addAcc.accType,
        Account_Outstanding: this.addAcc.accOutstanding,
      })
      .subscribe(res => {
        if(res) alert('Account updated')
        else alert('Unexpected error occured')
      })
  }

}
