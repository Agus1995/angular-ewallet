import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { AccountService } from 'src/app/service/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/model/account';
import { Customer } from 'src/app/model/customer';
 
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router, private service: AccountService, private fb: FormBuilder
  ) { }
  formAccount: FormGroup;
  cif1: Customer = new Customer();
  accounts: Account[] = [];
  cif = localStorage.getItem('cif');

  ngOnInit() {
    this.getAccount();
    this.cif1.cif = this.cif


    this.formAccount = this.fb.group({
      name: ['', Validators.required],
      curencyType: ['', Validators.required]
    });

  }


  // @Input()
  account: Account = {
    accountNumber: '',
    name:'',
    curencyType:'',
    balance: 0,
    createdAt:'',
    updatedAt:'',
    customer: this.cif1

  }

  async createAccount(){
    this.account.name = this.formAccount.controls["name"].value;
    this.account.curencyType = this.formAccount.controls["curencyType"].value;
    console.log(this.account);
    const response = await this.service.createAccount(this.account).toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage)
    } else{
      alert("success");
      this.getAccount();
    }
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

  walletClick(){
    this.router.navigate(['/account']);
  }
}
