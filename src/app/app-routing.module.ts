import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AccountComponent } from './components/accounts/account/account.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

const routes: Routes = [
  {path: '', redirectTo: '/accounts', pathMatch: 'full'},
  {path: 'accounts', component: AccountsComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'expenses', component: ExpensesComponent},
  {path: 'customer/:id', component: EditCustomerComponent},
  {path: 'account/:id', component: AccountComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
