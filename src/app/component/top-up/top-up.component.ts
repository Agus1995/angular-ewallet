import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/service/account.service';
import { TransactionService } from 'src/app/service/transaction.service';
import { Transaction } from 'src/app/model/transaction';
import { TransactionType } from 'src/app/model/transaction-type';
import { Account } from 'src/app/model/account';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.component.html',
  styleUrls: ['./top-up.component.css']
})
export class TopUpComponent implements OnInit {

  constructor(private fb: FormBuilder, private serviceAcc: AccountService, private serviceTrans: TransactionService) { }
  cif = localStorage.getItem('cif');
  formTrans: FormGroup;
  // type: TransactionType = new TransactionType();
  cus: Customer = new Customer();
  accounts: Account[] = [];

  ngOnInit() {
    this.getAccounts();
    this.formTrans = this.fb.group({
      accFrom: ['', Validators.required],
      accDst: ['', Validators.required],
      amount: ['', Validators.required]
    })
  }

  type: TransactionType = new TransactionType();
  // trans: Transaction = {
  //   id: '',
  //   accCredit: '',
  //   accDebit: '',
  //   amount: 0,
  //   date: '',
  //   transactionTypeDTO: this.type
  // }
  trans: Transaction = new Transaction();

  account: Account = {
    accountNumber:'',
    name:'',
    currencyType:'',
    balance: 0,
    createdAt:'',
    updatedAt:'',
    customer: this.cus
  }
  
  async getAccounts(){
    if (this.cif == undefined) {
      this.cif = localStorage.getItem('cif');
    }
    const response = await this.serviceAcc.getAccount(this.cif).toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage)
    } else{
      console.log(response.data)
      this.accounts= response.data;
    }
  }

  async createTopUp(){
    // this.type.type = 'TR-001';
    // this.trans.transactionTypeDto = this.type;
    this.trans.accDebet = this.formTrans.controls.accFrom.value;
    this.trans.accCredit = this.formTrans.controls.accDst.value;
    this.trans.amount = this.formTrans.controls.amount.value;
    console.log(this.trans);
    const response = await this.serviceTrans.topUp(this.trans).toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage);
    }else{
      alert("success");
    }
  }
}
