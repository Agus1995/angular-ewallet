import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponse } from '../security/commonResponse';
import { Kurs } from '../model/kurs';
import {Constants} from "./Constants";

@Injectable({
  providedIn: 'root'
})
export class KursService {

  constructor(private http: HttpClient) { }

  addKurs(kurs: Kurs): Observable<CommonResponse<Kurs>> {
    return this.http.post<CommonResponse<Kurs>>(`${Constants.API_BASE_URL}/kurs`, kurs);
  }

  getAll(): Observable<CommonResponse<Kurs[]>> {
    return this.http.get<CommonResponse<Kurs[]>>(`${Constants.API_BASE_URL}/kurs`);
  }

  getNew(ccy1, ccy2): Observable<CommonResponse<Kurs>> {
    const params = new HttpParams()
                  .set('ccy1', ccy1)
                  .set('ccy2', ccy2)
    return this.http.get<CommonResponse<Kurs>>(`${Constants.API_BASE_URL}/tradding/new`, {params});
  }

  getGraph(ccy1, ccy2): Observable<CommonResponse<Kurs[]>> {
    const params = new HttpParams()
                  .set('ccy1', ccy1)
                  .set('ccy2', ccy2)
    return this.http.get<CommonResponse<Kurs[]>>(`${Constants.API_BASE_URL}/tradding/graph`, {params});
  }
}
