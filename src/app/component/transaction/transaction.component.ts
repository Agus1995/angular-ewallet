import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { TransactionService } from 'src/app/service/transaction.service';
import { Account } from 'src/app/model/account';
import { Transaction } from 'src/app/model/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private serviceAcc: AccountService, private serviceTrans: TransactionService) { }

  accounts: Account[] = [];
  trans: Transaction[] = [];

  ngOnInit() {
    this.getAccounts();
  }

  async getAccounts(){
    let cif = localStorage.getItem('cif');
    const response = await this.serviceAcc.getAccount(cif).toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage)
    } else{
      this.accounts= response.data;
    }
  }

  async getTrans(accNum){
    const response = await this.serviceTrans.getTransaction(accNum).toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage)
    } else{
      console.log(response.data)
      this.trans = response.data;
    }
  }
}
