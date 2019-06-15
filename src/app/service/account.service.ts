import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonResponse } from '../security/commonResponse';
import { Observable } from 'rxjs';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

urlAccount = 'http://104.248.147.193:9191/account';
urlgetAccount = 'http://104.248.147.193:9191/customer/';

createAccount(account: Account) :Observable<CommonResponse<Account>>{
  return this.http.post<CommonResponse<Account>>(this.urlAccount, account);
}


getAccount(cif) :Observable<CommonResponse<Account[]>>{
  return this.http.get<CommonResponse<Account[]>>(this.urlgetAccount+cif+"/accounts")
}
}