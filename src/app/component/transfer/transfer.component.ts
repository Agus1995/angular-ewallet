import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';
import { Customer } from 'src/app/model/customer';
import { Account } from 'src/app/model/account';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Transaction } from 'src/app/model/transaction';
import { TransactionService } from 'src/app/service/transaction.service';
import { TransactionType } from 'src/app/model/transaction-type';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private service: AccountService, private serviceTrans: TransactionService ) { }
  accounts: Account[] = [];
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
  this.getAccount();

  this.formTransfer = this.fb.group({
    accDebit: ['', Validators.required],
    accCredit: ['', Validators.required],
    amount: ['', Validators.required]
  })
  }

  async getAccount(){
    if(this.cif == undefined){
      this.cif = localStorage.getItem(this.cif);
    }
    const response = await this.service.getAccount(this.cif).toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage)
    } else{
      console.log(response.data)
      this.accounts= response.data;
    }
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
    }
  }
}
