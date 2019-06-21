import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/service/account.service';
import { TransactionService } from 'src/app/service/transaction.service';
import { Transaction } from 'src/app/model/transaction';
import { TransactionType } from 'src/app/model/transaction-type';
import { Account } from 'src/app/model/account';
import { Customer } from 'src/app/model/customer';
import { WalletService } from 'src/app/service/wallet.service';
import { WalletAcc } from 'src/app/model/wallet-acc';
import { Wallet } from 'src/app/model/wallet';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.component.html',
  styleUrls: ['./top-up.component.css']
})
export class TopUpComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private serviceTrans: TransactionService,
              private serviceWall: WalletService,
              private serviceAcc: AccountService) { }

  cif = localStorage.getItem('cif');
  formTrans: FormGroup;
  cus: Customer = new Customer();
  accounts: WalletAcc[] = [];
  accounts2: Account[] = [];

  ngOnInit() {
    this.getAccounts();
    this.getWallReg();
    this.formTrans = this.fb.group({
      accFrom: ['', Validators.required],
      accDst: ['', Validators.required],
      amount: ['', Validators.required],
      listWallAcc: ['', Validators.required]
    })
  }
 
  type: TransactionType = new TransactionType();
  trans: Transaction = {
    id: '',
    accCredit: '',
    accDebet: '',
    amount: 0,
    date: '',
    transactionType: this.type
  }

  account: Account = {
    accountNumber:'',
    name:'',
    currencyType:'',
    balance: 0,
    createdAt:'',
    updatedAt:'',
    customer: this.cus
  }

  async createTopUp(){
    this.type.type = 'TR-001';
    this.trans.accDebet = this.formTrans.controls.accFrom.value;
    this.trans.accCredit = this.formTrans.controls.accDst.value;
    this.trans.amount = this.formTrans.controls.amount.value;
    console.log(this.trans);
    const response = await this.serviceTrans.topUp(this.trans).toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage);
    }else{
      alert("success");
      this.formTrans.reset();
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
      
    }
  }

  async getAccounts(){
    if (this.cif == undefined) {
      this.cif = localStorage.getItem('cif');
    }
    const response = await this.serviceAcc.getAccount(this.cif).toPromise();
    this.accounts2 = response.data;
    console.log(this.accounts2);
  }

  getAcc(acc){
    console.log(acc);
  }
}
