import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from 'src/app/component/transaction/transaction.component';
import { TopUpComponent } from 'src/app/component/top-up/top-up.component';
import { TransferComponent } from 'src/app/component/transfer/transfer.component';

const routes: Routes = [
  {path:"history", component: TransactionComponent},
  {path:"topup", component: TopUpComponent},
  {path:"transfer", component: TransferComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
 