import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonResponse } from '../security/commonResponse';
import { Observable } from 'rxjs';
import { Account } from '../model/account';
import {Constants} from "./Constants";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  createAccount(account: Account): Observable<CommonResponse<Account>> {
    return this.http.post<CommonResponse<Account>>(`${Constants.API_BASE_URL}/account`, account);
  }
  getAccount(cif): Observable<CommonResponse<Account[]>> {
    return this.http.get<CommonResponse<Account[]>>(`${Constants.API_BASE_URL}/` + cif + '/accounts');
  }
}
