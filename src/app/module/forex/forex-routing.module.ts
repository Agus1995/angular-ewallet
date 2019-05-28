import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForexComponent } from 'src/app/component/forex/forex.component';

const routes: Routes = [
  {path:"", component: ForexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForexRoutingModule { }
 