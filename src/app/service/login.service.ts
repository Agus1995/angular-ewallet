import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';
import { CommonResponse } from '../security/commonResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  urlLogin = 'http://localhost:9191/customer/login';
  urlRegister = 'http://localhost:9191/customer/register';

login(login: Customer) : Observable<CommonResponse<Customer>>{
  return this.http.post<CommonResponse<Customer>>(this.urlLogin, login);
}

}



