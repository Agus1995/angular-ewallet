import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Account } from 'src/app/model/account';

@Component({
  selector: 'app-list-acc',
  templateUrl: './list-acc.component.html',
  styleUrls: ['./list-acc.component.css']
})
export class ListAccComponent implements OnInit {

  constructor(private serviceAcc: AccountService) { }

  accounts: Account[] = [];
  account: string = '';

  ngOnInit() {
    this.getAccounts();
  }

  @Input()
  receiveAcc: string;

  async getAccounts(){
    let cif = localStorage.getItem('cif');
    const response = await this.serviceAcc.getAccount(cif).toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage)
    } else{
      this.accounts= response.data;
    }
  }

  getAcc(acc){
    console.log(acc);
    this.account = acc;
  }

}
