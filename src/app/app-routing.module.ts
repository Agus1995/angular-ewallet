import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { AccountComponent } from './component/account/account.component';
import { RegisterComponent } from './home/register/register.component';
import { WalletComponent } from './component/wallet/wallet.component';
import { ForexComponent } from './component/forex/forex.component';
import { TransactionComponent } from './component/transaction/transaction.component';
import { ServiceComponent } from './home/service/service.component';
import { AboutComponent } from './home/about/about.component';
import { ProgramsComponent } from './home/programs/programs.component';
import { TeamComponent } from './home/team/team.component';
import { FooterHomeComponent } from './home/footer-home/footer-home.component';

const routes: Routes = [
  {path: "", redirectTo:"home",pathMatch:"full"},
  {path:"home", loadChildren: './module/home/home.module#HomeModule'},
  {path:"account", loadChildren: './module/account/account.module#AccountModule'},
  {path:"wallet", loadChildren: './module/wallet/wallet.module#WalletModule'},
  {path:"forex", loadChildren: './module/forex/forex.module#ForexModule'},
  {path:"transaction", loadChildren: './module/transaction/transaction.module#TransactionModule'} 
  //{path:"account", loadChildren: './mod'}
  // {path: "customer", loadChildren: './module/customer/customer.module#CustomerModule'},
  // {path:"home", loadChildren:'./module/home.module#HomeModule'},
  // {path:"login", component: LoginComponent},
  // {path:"register", component: RegisterComponent},
  //{path:"account", component: AccountComponent},
  // {path:"wallet", component: WalletComponent},
  // {path:"forex", component: ForexComponent},
  // {path:"transaction", component:   TransactionComponent},
  // {path:"cus", loadChildren()}
  // {path:"service", component: ServiceComponent},
  // {path:"about", component: AboutComponent},
  // {path:"programs", component: ProgramsComponent},
  // {path:"team", component: TeamComponent},
  // {path:"footerHome", component: FooterHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
