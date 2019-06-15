import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../model/transaction';
import { Observable } from 'rxjs';
import { CommonResponse } from '../security/commonResponse';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { } 

  urlTopUp = 'http://104.248.147.193:9191/transaction';
  urlGetTrans = 'http://104.248.147.193:9191/account/';

  topUp(trans: Transaction) : Observable<CommonResponse<Transaction>>{
    return this.http.post<CommonResponse<Transaction>>(this.urlTopUp, trans)
  }

  getTransaction(accNum) : Observable<CommonResponse<Transaction[]>>{
    return this.http.get<CommonResponse<Transaction[]>>(this.urlGetTrans+accNum+'/transactions')
  }
}
