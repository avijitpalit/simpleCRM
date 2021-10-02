import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { FormsModule } from '@angular/forms';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';
import { AccountComponent } from './components/accounts/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AccountsComponent,
    CustomersComponent,
    NavComponent,
    ExpensesComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
