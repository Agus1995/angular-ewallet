import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/service/wallet.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Wallet } from 'src/app/model/wallet';
import { Customer } from 'src/app/model/customer';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor(private router: Router, private service: WalletService, private fb: FormBuilder ) { }
  cif = localStorage.getItem('cif');
  wallets: Wallet[] = [];
  formWallet: FormGroup;
  cus: Customer = new Customer();

  ngOnInit() {
    this.getWallet();
    this.cus.cif = this.cif

    this.formWallet = this.fb.group({
      walletName: ['', Validators.required]
    })
  }

  wallet: Wallet = {
    walletId: '',
    walletName:'',
    createdAt:'',
    updatedAt: '',
    customer: this.cus
  }

  async createWallet(){
    this.wallet.walletName = this.formWallet.controls.walletName.value;
    const response = await this.service.creatWallet(this.wallet).toPromise();
    console.log(this.wallet);
    if(response.responsecode != 1){
      alert(response.responsemessage)
    }else{
      alert("success");
      this.getWallet();
    }
  }

  async getWallet(){
    if(this.cif == undefined){
      this.cif = localStorage.getItem(this.cif);
    }
    const response = await this.service.getWalllet(this.cif).toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage)
    } else{
      console.log(response.data)
      this.wallets = response.data;
    }
  }



}
