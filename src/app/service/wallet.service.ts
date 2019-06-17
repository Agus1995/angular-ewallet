import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponse } from '../security/commonResponse';
import { Wallet } from '../model/wallet';
import { WalletAcc } from '../model/wallet-acc';
import {Constants} from "./Constants";

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  creatWallet(wallet: Wallet): Observable<CommonResponse<Wallet>> {
    return this.http.post<CommonResponse<Wallet>>(`${Constants.API_BASE_URL}/wallet`, wallet);
  }

  addWallAcc(wallAcc: WalletAcc): Observable<CommonResponse<WalletAcc>> {
    return this.http.post<CommonResponse<WalletAcc>>(`${Constants.API_BASE_URL}/wallet-account`, wallAcc);
  }

  getWalllet(cif): Observable<CommonResponse<Wallet[]>> {
    return this.http.get<CommonResponse<Wallet[]>>(`${Constants.API_BASE_URL}/customer/` + cif + '/wallets');
  }

  getWallAcc(cif): Observable<CommonResponse<WalletAcc[]>> {
    return this.http.get<CommonResponse<WalletAcc[]>>(`${Constants.API_BASE_URL}/customer/` + cif + '/wallet-accounts');
  }

  deleteWallAcc(id): Observable<CommonResponse<WalletAcc>> {
    return this.http.delete<CommonResponse<WalletAcc>>(`${Constants.API_BASE_URL}/wallet-account/` + id);
  }
}
