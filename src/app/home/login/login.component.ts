import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/customer';
import { CommonResponse } from 'src/app/security/commonResponse';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

formLogin : FormGroup;
cus: Customer=new Customer();


  constructor(private router: Router, private service: AuthService, private fb: FormBuilder) { }

  selectedRole: string;
  ngOnInit() {
    this.formLogin = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
      }
    )
  }

  async login(){
    this.cus.username = this.formLogin.controls.username.value; 
    this.cus.password = this.formLogin.controls.password.value;
    const response = await this.service.login(this.cus).toPromise();
    localStorage.setItem('cif', response.data.cif);
  }

}


  

