import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponse } from '../security/commonResponse';
import { Wallet } from '../model/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }


urlcreateWallet = 'http://localhost:9191/wallet';
urlgetWallet = 'http://localhost:9191/customer/';

creatWallet(wallet: Wallet) :Observable<CommonResponse<Wallet>>{
  return this.http.post<CommonResponse<Wallet>>(this.urlcreateWallet, wallet);
}

getWalllet(cif) : Observable<CommonResponse<Wallet[]>>{
  return this.http.get<CommonResponse<Wallet[]>>(this.urlgetWallet+cif+"/wallets")
}

}
