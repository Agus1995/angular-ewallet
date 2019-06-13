import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from 'src/app/component/transaction/transaction.component';
import { TopUpComponent } from 'src/app/component/top-up/top-up.component';
import { TransferComponent } from 'src/app/component/transfer/transfer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TransactionComponent,
    TopUpComponent,
    TransferComponent,
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TransactionModule { }
 