import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForexComponent } from 'src/app/component/forex/forex.component';
import { ChartExComponent } from 'src/app/component/chart-ex/chart-ex.component';

const routes: Routes = [
  {path:"", component: ForexComponent},
  {path:"charts", component: ChartExComponent},
  {path:"**", component: ChartExComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForexRoutingModule { }
 