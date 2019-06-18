import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Kurs } from 'src/app/model/kurs';
import { KursService } from 'src/app/service/kurs.service';
import { AccountService } from 'src/app/service/account.service';
import { Account } from 'src/app/model/account';
import { Customer } from 'src/app/model/customer';
import { ForexTrading } from 'src/app/model/forex-trading';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForexService } from 'src/app/service/forex.service';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {

  constructor(private serviceKurs: KursService, 
              private serviceForex : ForexService,
              private serviceAcc: AccountService, 
              private fb:FormBuilder) { }
  cif = localStorage.getItem('cif');
  accounts: Account[] = [];
  customer: Customer = new Customer();
  formBuy:FormGroup;
  formSell:FormGroup;

  ngOnInit() {
    this.getUsd(); 
    this.getKurs();
    this.getBuyValue();
    this.getAccounts();
    this.formBuy = this.fb.group({
      accBuy:['', Validators.required],
      amountBuy:['', Validators.required]
    });
    this.formSell = this.fb.group({
      accSell:['', Validators.required],
      amountSell:['', Validators.required]
    });
  }

  kurs: Kurs = new Kurs();
  listKurs: Kurs[] = [];
  listDate: any[]=[];
  listDataBuy: any[]=[];
  listDataSell: any[]=[];

  public barChartOptions: ChartOptions = {
    responsive: true,
	}; 
	
	public barChartLabels: Label[] = this.listDate;
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: this.listDataSell, label: 'Sell' },
    { data: this.listDataBuy, label: 'Buy' }
	];
  
  async getBuyValue(){
    this.kurs.ccy1 = "IDR";
    this.kurs.ccy2 = "USD";
    const response = await this.serviceKurs.getGraph(this.kurs.ccy1, this.kurs.ccy2).toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage)
    } else{
      this.listKurs = response.data;
    }
    this.listKurs.forEach(krs => {
      this.listDate.push(krs.date);
      this.listDataBuy.push(krs.buy);
      this.listDataSell.push(krs.sell);
    });

  }
  cus: Customer = new Customer();
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
      this.accounts= response.data;
    }
  }

  trade: ForexTrading = new ForexTrading();
  tradeRecord: ForexTrading[] = [];
  async tradeBuy(){
    
    this.trade.ccy = "USD";
    this.trade.amount = this.formBuy.controls.amountBuy.value;
    this.trade.account = this.formBuy.controls.accBuy.value;
    this.customer.cif = this.cif;
    this.trade.customer = this.customer;
    
    const response = await this.serviceForex.tradeBuy(this.trade).toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage);
    }else{
      alert("success");
      this.formBuy.reset();
      this.getUsd();
    }
  }

  async tradeSell(){
    this.trade.ccy = "USD";
    this.trade.amount = this.formSell.controls.amountSell.value;
    this.trade.account = this.formSell.controls.accSell.value;
    this.customer.cif = this.cif;
    this.trade.customer = this.customer;
    //this.trade.rate = 14000;
    const response = await this.serviceForex.tradeSell(this.trade).toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage);
    }else{
      alert("success");
      this.formSell.reset();
      this.getUsd();
    }
  }

  usd : ForexTrading;
  async getUsd(){
    if (this.cif == undefined) {
      this.cif = localStorage.getItem(this.cif);
    }
    const response = await this.serviceForex.getUsd(this.cif).toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage);
    }else{
      this.usd = response.data;
    }
  }

  kursUpdate: Kurs;
  kursSell: number;
  kursBuy: number;
  async getKurs(){
    let ccy1 = 'IDR';
    let ccy2 = 'USD';
    const response = await this.serviceKurs.getNew(ccy1, ccy2).toPromise();
    this.kursUpdate = response.data
    this.kursSell = this.kursUpdate.sell;
    this.kursBuy = this.kursUpdate.buy;
  }

}
