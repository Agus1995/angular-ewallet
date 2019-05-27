import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './model/customer/customer.component';
import { ForexComponent } from './component/forex/forex.component';
import { AccountComponent } from './component/account/account.component';
import { TransactionComponent } from './component/transaction/transaction.component';
import { WalletComponent } from './component/wallet/wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CustomerComponent,
    ForexComponent,
    AccountComponent,
    TransactionComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
