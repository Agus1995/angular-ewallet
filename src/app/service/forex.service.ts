import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponse } from '../security/commonResponse';
import { Kurs } from '../model/kurs';
import { ForexTrading } from '../model/forex-trading';
import {Constants} from "./Constants";

@Injectable({
  providedIn: 'root'
})
export class ForexService {

  constructor(private http: HttpClient) { }

  tradeBuy(forex: ForexTrading): Observable<CommonResponse<ForexTrading>> {
    return this.http.post<CommonResponse<ForexTrading>>(`${Constants.API_BASE_URL}/buy`, forex);
  }

  tradeSell(forex: ForexTrading): Observable<CommonResponse<ForexTrading>>{
    return this.http.post<CommonResponse<ForexTrading>>(`${Constants.API_BASE_URL}/sell`, forex);
  }

  getRecord(cif): Observable<CommonResponse<ForexTrading[]>> {
    return this.http.get<CommonResponse<ForexTrading[]>>(`${Constants.API_BASE_URL}/report/` + cif);
  }

  getUsd(cif): Observable<CommonResponse<ForexTrading>> {
    return this.http.get<CommonResponse<ForexTrading>>(`${Constants.API_BASE_URL}/tradding/` + cif);
  }
}
