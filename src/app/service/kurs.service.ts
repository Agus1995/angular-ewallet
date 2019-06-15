import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponse } from '../security/commonResponse';
import { Kurs } from '../model/kurs';

@Injectable({
  providedIn: 'root'
})
export class KursService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:9191/kurs';

  addKurs(kurs : Kurs):Observable<CommonResponse<Kurs>>{
    return this.http.post<CommonResponse<Kurs>>(this.url, kurs);
  }

  getAll(): Observable<CommonResponse<Kurs[]>>{
    return this.http.get<CommonResponse<Kurs[]>>(this.url);
  }

  getNew(): Observable<CommonResponse<Kurs>>{
    return this.http.get<CommonResponse<Kurs>>(this.url+"/new");
  }

  getGraph(ccy1, ccy2): Observable<CommonResponse<Kurs>>{
    const params = new HttpParams()
                  .set('ccy1', ccy1)
                  .set('ccy2', ccy2)
    return this.http.get<CommonResponse<Kurs>>(this.url+"/graph", {params});
  }
}
