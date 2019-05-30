import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from 'src/app/component/transaction/transaction.component';
import { FormsModule } from '@angular/forms';
import { TopUpComponent } from 'src/app/component/top-up/top-up.component';
import { TransferComponent } from 'src/app/component/transfer/transfer.component';

@NgModule({
  declarations: [
    TransactionComponent,
    TopUpComponent,
    TransferComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    FormsModule
  ]
})
export class TransactionModule { }
 