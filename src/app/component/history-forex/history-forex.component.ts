import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Account } from 'src/app/model/account';

@Component({
  selector: 'app-history-forex',
  templateUrl: './history-forex.component.html',
  styleUrls: ['./history-forex.component.css']
})
export class HistoryForexComponent implements OnInit {

  constructor(private serviceAcc: AccountService) { }

  accounts: Account[] = [];

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

}
