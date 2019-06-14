import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ForexService } from 'src/app/service/forex.service';

@Component({
  selector: 'app-chart-ex',
  templateUrl: './chart-ex.component.html',
  styleUrls: ['./chart-ex.component.css']
})
export class ChartExComponent implements OnInit {

  constructor(private serviceForex: ForexService) { }

  ngOnInit() {
	}
	
	public barChartOptions: ChartOptions = {
    responsive: true,
	};
	
	public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
	];
  
  async getBuyValue(){
    const response = await this.serviceForex.getKurs().toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage)
    } else{
      console.log(response.data)
    }
  }
}
