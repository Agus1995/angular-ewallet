import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../model/transaction';
import { Observable } from 'rxjs';
import { CommonResponse } from '../security/commonResponse';
import {Constants} from "./Constants";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { } 

  topUp(trans: Transaction): Observable<CommonResponse<Transaction>>{
    return this.http.post<CommonResponse<Transaction>>(`${Constants.API_BASE_URL}/transaction`, trans);
  }

  getTransaction(accNum): Observable<CommonResponse<Transaction[]>>{
    return this.http.get<CommonResponse<Transaction[]>>(`${Constants.API_BASE_URL}/account/` + accNum + '/transactions');
  }
}
