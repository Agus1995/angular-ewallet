import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from 'src/app/component/account/account.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AccountComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,

  ]
})
export class AccountModule { }
 