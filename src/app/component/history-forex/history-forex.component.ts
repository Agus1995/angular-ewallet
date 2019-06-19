import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Account } from 'src/app/model/account';
import { ForexTrading } from 'src/app/model/forex-trading';
import { ForexService } from 'src/app/service/forex.service';

@Component({
  selector: 'app-history-forex',
  templateUrl: './history-forex.component.html',
  styleUrls: ['./history-forex.component.css']
})
export class HistoryForexComponent implements OnInit {

  constructor(private serviceAcc: AccountService, private serviceFx: ForexService) { }

  accounts: Account[] = [];

  ngOnInit() {
    this.getRecord();
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

  record: ForexTrading[] = [];
  async getRecord(){
    let cif = localStorage.getItem('cif');
    const response = await this.serviceFx.getRecord(cif).toPromise();
    this.record = response.data;
    console.log(this.record)
  }

}
