import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { CustomerRoutingModule } from './customer-routing.module';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from 'src/app/component/customer/customer.component';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class CustomerModule { }
 