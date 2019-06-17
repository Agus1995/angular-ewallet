import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletModule } from './module/wallet/wallet.module';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { AboutComponent } from './home/about/about.component';
import { ServiceComponent } from './home/service/service.component';
import { ProgramsComponent } from './home/programs/programs.component';
import { TeamComponent } from './home/team/team.component';
import { NavbarHomeComponent } from './home/navbar-home/navbar-home.component';
import { FooterHomeComponent } from './home/footer-home/footer-home.component';
import { HomeComponent } from './home/home.component';
import {AuthenticationGuardService} from './security/authentication-guard.service';
import { KursComponent } from './component/kurs/kurs.component';
import { ListAccComponent } from './component/list-acc/list-acc.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes: Routes = [
  {path: "", redirectTo:"customer/profile",pathMatch:"full"},
  {path:"account", loadChildren: './module/account/account.module#AccountModule', canActivate: [AuthenticationGuardService]},
  {path:'wallet', loadChildren: './module/wallet/wallet.module#WalletModule', canActivate: [AuthenticationGuardService]},
  {path:"forex", loadChildren: './module/forex/forex.module#ForexModule', canActivate: [AuthenticationGuardService]},
  {path:"transaction", loadChildren: './module/transaction/transaction.module#TransactionModule', canActivate: [AuthenticationGuardService]},
  {path:"customer", loadChildren: './module/customer/customer.module#CustomerModule', canActivate: [AuthenticationGuardService]},

  {path:"home", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"about", component: AboutComponent},
  {path:"service", component: ServiceComponent},
  {path:"programs", component: ProgramsComponent},
  {path:"team", component: TeamComponent},
  {path:"navbarHome", component: NavbarHomeComponent},
  {path:"footerHome", component: FooterHomeComponent},
  {path:"kurs", component: KursComponent},
  {path:"404Notfound", component: NotFoundComponent},
  {path:"listAcc", component: ListAccComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 