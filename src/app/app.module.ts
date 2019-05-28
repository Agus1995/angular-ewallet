import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { HomeComponent } from './home/home.component';
import { ForexComponent } from './component/forex/forex.component';
import { AccountComponent } from './component/account/account.component';
import { TransactionComponent } from './component/transaction/transaction.component';
import { WalletComponent } from './component/wallet/wallet.component';
import { ServiceComponent } from './home/service/service.component';
import { ProgramsComponent } from './home/programs/programs.component';
import { AboutComponent } from './home/about/about.component';
import { TeamComponent } from './home/team/team.component';
import { NavbarHomeComponent } from './home/navbar-home/navbar-home.component';
import { FooterHomeComponent } from './home/footer-home/footer-home.component';
import { ChartExComponent } from './component/chart-ex/chart-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    //NavbarComponent,
    SidebarComponent,
    ChartExComponent,
    // LoginComponent,
    // RegisterComponent,
    // HomeComponent,
    // ForexComponent,
    // AccountComponent,
    // TransactionComponent,
    // WalletComponent,
    // ServiceComponent,
    // ProgramsComponent,
    // AboutComponent,
    // TeamComponent,
    // NavbarHomeComponent,
    // FooterHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
