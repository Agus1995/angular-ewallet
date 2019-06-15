import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponse } from '../security/commonResponse';
import { Kurs } from '../model/kurs';

@Injectable({
  providedIn: 'root'
})
export class ForexService {

  constructor(private http: HttpClient) { }

  urlGetKurs = 'http://104.248.147.193:9191/kurs';

  getKurs() : Observable<CommonResponse<Kurs[]>>{
    return this.http.get<CommonResponse<Kurs[]>>(this.urlGetKurs);
  }
}
