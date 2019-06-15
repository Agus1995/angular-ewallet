import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponse } from '../security/commonResponse';
import { Wallet } from '../model/wallet';
import { WalletAcc } from '../model/wallet-acc';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }


urlcreateWallet = 'http://104.248.147.193:9191/wallet';
urlgetWallet = 'http://104.248.147.193:9191/customer/';

urlAddWallAcc = 'http://104.248.147.193:9191/wallet-account';
urlGetWallAcc = 'http://104.248.147.193:9191/customer/';

urlDelWallAcc = 'http://104.248.147.193:9191/wallet-account/';

creatWallet(wallet: Wallet) :Observable<CommonResponse<Wallet>>{
  return this.http.post<CommonResponse<Wallet>>(this.urlcreateWallet, wallet);
}

addWallAcc(wallAcc: WalletAcc) : Observable<CommonResponse<WalletAcc>>{
  return this.http.post<CommonResponse<WalletAcc>>(this.urlAddWallAcc, wallAcc);
}

getWalllet(cif) : Observable<CommonResponse<Wallet[]>>{
  return this.http.get<CommonResponse<Wallet[]>>(this.urlgetWallet+cif+"/wallets")
}

getWallAcc(cif) : Observable<CommonResponse<WalletAcc[]>>{
  return this.http.get<CommonResponse<WalletAcc[]>>(this.urlGetWallAcc+cif+"/wallet-accounts")
}

deleteWallAcc(id) : Observable<CommonResponse<WalletAcc>>{
  return this.http.delete<CommonResponse<WalletAcc>>(this.urlDelWallAcc+id);
}
}
