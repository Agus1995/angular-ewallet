import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';
import { Customer } from 'src/app/model/customer';
import { Account } from 'src/app/model/account';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Transaction } from 'src/app/model/transaction';
import { TransactionService } from 'src/app/service/transaction.service';
import { TransactionType } from 'src/app/model/transaction-type';
import { WalletService } from 'src/app/service/wallet.service';
import { WalletAcc } from 'src/app/model/wallet-acc';
import { Wallet } from 'src/app/model/wallet';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private router: Router, 
              private fb: FormBuilder, 
              private service: AccountService, 
              private serviceTrans: TransactionService,
              private serviceWall: WalletService ) { }

  accounts: WalletAcc[] = [];
  transactions: Transaction = new Transaction();
  cif = localStorage.getItem('cif');
  formTransfer: FormGroup;
  type: TransactionType = new TransactionType();
  trans: Transaction = {
    id: '',
    accCredit: '',
    accDebet: '',
    amount: 0,
    date: '',
    transactionType: this.type
  }

  ngOnInit() {
  this.getWallReg();
  this.formTransfer = this.fb.group({
    accDebit: ['', Validators.required],
    accCredit: ['', Validators.required],
    amount: ['', Validators.required],
    listWallAcc: ['', Validators.required]
  })
  }

  async submitTransfer(){
    this.type.type = 'TR-002';
    this.trans.accDebet = this.formTransfer.controls.accDebit.value;
    this.trans.accCredit = this.formTransfer.controls.accCredit.value;
    this.trans.amount = this.formTransfer.controls.amount.value;
    console.log(this.trans);
    const response = await this.serviceTrans.topUp(this.trans).toPromise();
    if (response.responsecode != 1){
      alert(response.responsemessage)
    } else {
      alert("sucess")
      this.formTransfer.reset();
    }
  }

  wallAcc: Wallet[]=[];
  listWallAcc: []=[];
  async getWallReg(){
    if (this.cif == undefined) {
      this.cif = localStorage.getItem('cif');
    }
    const response = await this.serviceWall.getWalllet(this.cif).toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage);
    }else{
      this.wallAcc = response.data;
    }
  }

  async getWc(wc){
    const response = await this.serviceWall.getAccReg(wc).toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage);
    }else{
      this.accounts = response.data;
      console.log(this.wallAcc);
    }
  }
}
