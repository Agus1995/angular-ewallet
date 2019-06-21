import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForexComponent } from 'src/app/component/forex/forex.component';
import { ChartExComponent } from 'src/app/component/chart-ex/chart-ex.component';
import { HistoryForexComponent } from 'src/app/component/history-forex/history-forex.component';
import { ReportForexComponent } from 'src/app/component/report-forex/report-forex.component';

const routes: Routes = [
  {path:"", component: ForexComponent},
  {path:"charts", component: ChartExComponent},
  {path:"history", component: HistoryForexComponent},
  {path: "report", component: ReportForexComponent},
  {path:"**", component: ChartExComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForexRoutingModule { }
 