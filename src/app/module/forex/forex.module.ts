import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForexRoutingModule } from './forex-routing.module';
import { ForexComponent } from 'src/app/component/forex/forex.component';
import { HistoryForexComponent } from 'src/app/component/history-forex/history-forex.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ChartExComponent } from 'src/app/component/chart-ex/chart-ex.component';


@NgModule({
  declarations: [
    ForexComponent,
    ChartExComponent,
    HistoryForexComponent
  ],
  imports: [
    CommonModule,
    ForexRoutingModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule
  ]
})
export class ForexModule { } 
 