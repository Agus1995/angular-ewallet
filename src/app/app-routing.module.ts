import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { AccountComponent } from './component/account/account.component';
import { RegisterComponent } from './home/register/register.component';
import { WalletComponent } from './component/wallet/wallet.component';
import { ForexComponent } from './component/forex/forex.component';
import { TransactionComponent } from './component/transaction/transaction.component';

const routes: Routes = [
  {path: "", redirectTo:"home",pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"account", component: AccountComponent},
  {path:"wallet", component: WalletComponent},
  {path:"forex", component: ForexComponent},
  {path:"transaction", component: TransactionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
