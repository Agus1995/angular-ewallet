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

  urlTransaction = 'http://localost:9191/transaction';

transfer(transaction: Transaction): Observable<CommonResponse<Transaction>>{
  return this.http.post<CommonResponse<Transaction>>(this.urlTransaction, transaction);
}

}
