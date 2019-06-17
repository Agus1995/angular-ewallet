import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';
import { CommonResponse } from '../security/commonResponse';
import { Constants } from './Constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(login: Customer): Observable<CommonResponse<Customer>> {
    return this.http.post<CommonResponse<Customer>>(`${Constants.API_BASE_URL}/login`, login);
  }
  register(register: Customer): Observable<CommonResponse<Customer>> {
    return this.http.post<CommonResponse<Customer>>(`${Constants.API_BASE_URL}/register`, register);
  }
  profile(cif): Observable<CommonResponse<Customer>> {
    return this.http.get<CommonResponse<Customer>>(`${Constants.API_BASE_URL}/customer/` + cif);
  }

}



