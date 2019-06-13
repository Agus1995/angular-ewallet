import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/service/account.service';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.component.html',
  styleUrls: ['./top-up.component.css']
})
export class TopUpComponent implements OnInit {

  constructor(private fb: FormBuilder, private serviceAcc: AccountService, private serviceTrans: TransactionService) { }
  formTrans: FormGroup;

  ngOnInit() {
    this.formTrans = this.fb.group({
      
    })
  }

  
}
