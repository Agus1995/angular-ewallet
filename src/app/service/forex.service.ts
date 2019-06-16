import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponse } from '../security/commonResponse';
import { Kurs } from '../model/kurs';
import { ForexTrading } from '../model/forex-trading';

@Injectable({
  providedIn: 'root'
})
export class ForexService {

  constructor(private http: HttpClient) { }

  urlSell = 'http://localhost:9191/sell';
  urlBuy = 'http://localhost:9191/buy';
  urlGet = "http://localhost:9191/tradding/";

  tradeBuy(forex: ForexTrading) : Observable<CommonResponse<ForexTrading>>{
    return this.http.post<CommonResponse<ForexTrading>>(this.urlBuy, forex);
  }

  tradeSell(forex: ForexTrading) : Observable<CommonResponse<ForexTrading>>{
    return this.http.post<CommonResponse<ForexTrading>>(this.urlSell, forex);
  }

  getRecord(cif) : Observable<CommonResponse<ForexTrading[]>>{
    return this.http.get<CommonResponse<ForexTrading[]>>(this.urlGet+cif);
  }

  getUsd(cif) : Observable<CommonResponse<ForexTrading>>{
    return this.http.get<CommonResponse<ForexTrading>>(this.urlGet+cif);
  }
}
