import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForexRoutingModule } from './forex-routing.module';
import { ForexComponent } from 'src/app/component/forex/forex.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ForexComponent
  ],
  imports: [
    CommonModule,
    ForexRoutingModule,
    FormsModule
  ]
})
export class ForexModule { }
 