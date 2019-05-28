import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from 'src/app/component/wallet/wallet.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WalletComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    FormsModule
  ]
})
export class WalletModule { }
 