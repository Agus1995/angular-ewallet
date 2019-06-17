import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';
import { CommonResponse } from '../security/commonResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  urlLogin = 'http://104.248.147.193:9191/api/login';
  urlRegister = 'http://104.248.147.193:9191/api/register';
  urlProfile = 'http://104.248.147.193:9191/api/customer/';
 

login(login: Customer) : Observable<CommonResponse<Customer>>{
  return this.http.post<CommonResponse<Customer>>(this.urlLogin, login);
}

// isLogin(){
//   if(localStorage.getItem("user") !== null){
//     return false;
//   } else {
//     return true;
//   }

register(register: Customer): Observable<CommonResponse<Customer>>{
  return this.http.post<CommonResponse<Customer>>(this.urlRegister, register);
}

profile(cif): Observable<CommonResponse<Customer>>{
  return this.http.get<CommonResponse<Customer>>(this.urlProfile+cif);
}

}



