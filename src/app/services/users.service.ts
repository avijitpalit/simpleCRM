import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  n: number = 1;

  constructor(private httpService: HttpService) { }

  listCustomers(): Observable<any>{
    return this.httpService.get('api/Customers');
  }

  addCustomer(name: string): Observable<any>{
    return this.httpService.post('api/Customers', {Customer_Name: name})
  }

  updateCustomer(id: number, name: string): Observable<any>{
    return this.httpService.put(`api/Customers/${id}`, {
      "Customer_ID" :id,
      "Customer_Name" : name
    })
  }

  getCustomer(id: number): Observable<any>{
    return this.httpService.get(`api/Customers/${id}`)
  }

  getAccounts(custID: number): Observable<any>{
    return this.httpService.get(`api/Accounts?customer_ID=${custID}`)
  }

  addAccount(custID: number, accountType: string, accountOutstanding: number): Observable<any>{
    return this.httpService.post(`api/Accounts`, {
      Customer_ID: custID,
      Account_Type: accountType,
      Account_Outstanding: accountOutstanding
    })
  }

  getAccount(accID: number): Observable<any>{
    return this.httpService.get(`api/Accounts/${accID}`)
  }

  updateAccount(accID: number , accObj: object): Observable<any>{
    return this.httpService.put(`api/Accounts/${accID}`, accObj)
  }
}
