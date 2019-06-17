import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/service/wallet.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Wallet } from 'src/app/model/wallet';
import { Customer } from 'src/app/model/customer';
import { AccountService } from 'src/app/service/account.service';
import { Account } from 'src/app/model/account';
import { WalletAcc } from 'src/app/model/wallet-acc';
import * as $ from 'jquery';
import 'datatables.net-bs4';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor(private router: Router, private service: WalletService, private fb: FormBuilder, private serviceAcc: AccountService) { }
  cif = localStorage.getItem('cif');
  wallets: Wallet[] = [];
  formWallet: FormGroup;
  formWallAcc: FormGroup;
  cus: Customer = new Customer();
  // acc: Account;
  // wall: Wallet = new Wallet();
  accounts: Account[] = [];
  wallAccList: WalletAcc[] = [];


  ngOnInit() {
    this.getWallet();
    this.getAccounts();
    this.getWallAc();
    setTimeout(() => {
      $(function () {
        $('#tb-wallAcc').DataTable();
      });
      $(function () {
        $('#tb-wall').DataTable();
      });
    }, 1000);
    this.cus.cif = this.cif

    this.formWallet = this.fb.group({
      walletName: ['', Validators.required]
    })

    this.formWallAcc = this.fb.group({
      accNumb: ['', Validators.required]
    })
  }

  wallet: Wallet = {
    walletId: '',
    walletName: '',
    createdAt: '',
    updatedAt: '',
    customer: this.cus
  }

  // @Input()
  account: Account = {
    accountNumber: '',
    name: '',
    currencyType: '',
    balance: 0,
    createdAt: '',
    updatedAt: '',
    customer: this.cus

  }

  wallAcc: WalletAcc = {
    id: '',
    account: this.account,
    wallet: this.wallet
  }
  async createWallet() {
    this.wallet.walletName = this.formWallet.controls.walletName.value;
    const response = await this.service.creatWallet(this.wallet).toPromise();
    console.log(this.wallet);
    if (response.responsecode != 1) {
      alert(response.responsemessage)
    } else {
      alert("success");
      this.getWallet();
    }
  }

  async createWallAcc() {
    this.account.accountNumber = this.formWallAcc.controls.accNumb.value;
    console.log(this.wallAcc);
    const response = await this.service.addWallAcc(this.wallAcc).toPromise();
    if (response.responsecode != 1) {
      alert(response.responsemessage)
    } else {
      alert("success");
      this.getWallet();
      this.getWallAc();
    }
  }

  getWallId(w) {
    // this.wall.walletId = w;
    console.log(w.walletId);
    this.wallet.walletId = w.walletId;
  }

  async getWallet() {
    if (this.cif == undefined) {
      this.cif = localStorage.getItem(this.cif);
    }
    const response = await this.service.getWalllet(this.cif).toPromise();
    if (response.responsecode != 1) {
      alert(response.responsemessage)
    } else {
      console.log(response.data)
      this.wallets = response.data;
    }
  }

  async getAccounts() {
    if (this.cif == undefined) {
      this.cif = localStorage.getItem('cif');
    }
    const response = await this.serviceAcc.getAccount(this.cif).toPromise();
    if (response.responsecode != 1) {
      alert(response.responsemessage)
    } else {
      console.log(response.data)
      this.accounts = response.data;
    }
  }

  async getWallAc() {
    if (this.cif == undefined) {
      this.cif = localStorage.getItem('cif');
    }
    const response = await this.service.getWallAcc(this.cif).toPromise();
    if (response.responsecode != 1) {
      alert(response.responsemessage)
    } else {
      console.log(response.data);
      this.wallAccList = response.data;
    }
  }

  async deleteWalAcc(id) {
    if (window.confirm('Are you sure, you want to Delete?')) {
      const response = await this.service.deleteWallAcc(id).toPromise();
      if (response.responsecode != 1) {
        alert(response.responsemessage)
      } else {
        alert("delete Success");
        this.getWallAc();
      }
    }
  }
}
